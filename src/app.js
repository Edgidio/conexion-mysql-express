const express = require('express');
const app = express();

// import modules node
const path = require('path');

// import modules npm
const dotenv = require('dotenv').config({ path: path.join(__dirname, '.env')});

// setting
app.set('PORT', process.env.PORT);

// middlewares
app.use(express.json());
app.use(express.urlencoded());


// routes
app.use(require('./routes/registro_familiar.routes'))

module.exports = app;