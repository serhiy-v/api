const express = require('express');
const config = require('./config/index');

const app = express();

app.listen(config.appPort,()=>console.log("Server started"));