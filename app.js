const express = require("express");
require("dotenv").config();

const router = require('./src/routes/index');

const errorHandler = require('./src/middleware/errorHandler');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/api', router);

app.use(express.static(__dirname + '/public'));

app.use( errorHandler );

module.exports = app;