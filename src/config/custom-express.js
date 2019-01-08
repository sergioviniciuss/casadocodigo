const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const routes = require('../app/routes/routes');
routes(app);
module.exports = app;