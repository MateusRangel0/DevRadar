const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://mateusrangel:semana10@cluster0-qdqgt.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors())
app.use(express.json()); //tem que vir antes
app.use(routes);

app.listen(3333);
