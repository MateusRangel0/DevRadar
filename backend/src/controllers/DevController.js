const axios = require('axios');
const Dev = require('../models/Dev');

module.exports = {
    async store(request, response) {
        const { github_username, techs, latitude, longitude } = request.body;
    
        // Crase permite adicionar uma variável 
        const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
    
        // Se o name não existir, vai pegar o valor padrão
        const { name = login, avatar_url, bio } = apiResponse.data;
    
        const techsArray = techs.split(',').map(tech => tech.trim());
    
        const location = {
            type: 'Point',
            coordinates: [longitude, latitude],  //longitude primeiro
        };
    
        const dev = await Dev.create({
            github_username,
            name,
            avatar_url,
            bio,
            techs: techsArray,
            location,
        });
    
        // continuar
        return response.json(dev);
    }


};