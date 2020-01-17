const { Router } = require('express');
const axios = require('axios');
const Dev = require('./models/Dev');

const routes = Router();

// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de parâmetros:
//  - Query Params: request.query (Filtros, ordenação, paginação, ...)
//  - Route Params: request.params (Identificar um recurso na alteração ou remoção)
//  - Body: request.body (Dados para criação ou alteração de um registro)

// MongoDB (Não-relacional)

// Assimcronismo, promise... -> estudar!

routes.post('/devs', async (request, response) => {
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
});

module.exports = routes;