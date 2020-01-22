const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');
const { findConnections, sendMessage } = require('../websocket');

module.exports = {
    async index(request, response) {
        const devs = await Dev.find();

        return response.json(devs);
    },

    async store(request, response) {
        const { github_username, techs, latitude, longitude } = request.body;

        let dev = await Dev.findOne({ github_username });

        if(!dev) {
        // Crase permite adicionar uma variável 
        const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
    
        // Se o name não existir, vai pegar o valor padrão
        const { name = login, avatar_url, bio } = apiResponse.data;
    
        const techsArray = parseStringAsArray(techs);
    
        const location = {
            type: 'Point',
            coordinates: [longitude, latitude],  //longitude primeiro
        };
    
        dev = await Dev.create({
            github_username,
            name,
            avatar_url,
            bio,
            techs: techsArray,
            location,
        });

        // Filtrar as conexões que estão há, no máximo, 10km de distancia
        // e que o novo dev tenha pelo menos uma das tecnologias filtradas

        const sendSocketMessageTo = findConnections(
            { latitude, longitude },
            techsArray,
        )
            
        sendMessage(sendSocketMessageTo, 'new-dev', dev);            
        }
        // continuar
        return response.json(dev);
    },

    // Nao entendo como isso funciona muito bem
    // Caso seja necessario, revisar
    async update(request, response) {
        const { github } = request.params;
        const dev = await Dev.findOne({ github });
        const { latitude, longitude, techs, ...rest } = request.body;
        rest.github = github;
        if(latitude && longitude) {
            var newLocation = {
                type: 'Point',
                coordinates: [longitude, latitude]
            }
        }
        if(techs) var techsArray = parseStringAsArray(techs)

        const newDev = await Dev.updateOne({ github }, {
            location: (latitude&&longitude) ? newLocation: dev.location,
            techs: techs? techsArray : dev.techs,
            ...rest
        });

        return rest.json({
            modifiedCount: newDev.nModified,
            ok: newDev.ok
        });
    },

    async delete(request, response) {
        const { github } = request.params;
        await Dev.deleteOne({ github });
        const devs = await Dev.find();
        return response.json(devs);
    }

};