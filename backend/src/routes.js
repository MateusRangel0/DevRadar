const { Router } = require('express');

const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

// Devs endpoint
routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.delete('/devs/', DevController.delete)
routes.get('/search', SearchController.index);


module.exports = routes;