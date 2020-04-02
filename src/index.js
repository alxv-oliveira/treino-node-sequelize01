const express = require('express');
const consign = require('consign');

require('./database');

const app = express();

app.use(express.json());

consign()
    .include("src/controllers")
    .then("src/routes.js")
    .into(app);

app.listen(3333, () => console.log('Servidor rodando'));