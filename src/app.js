require('dotenv').config();
const express = require('express');
const config = require('./config/index');
const mongoose = require('mongoose');
require('./models/index');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.json());

require('./db/db');

require("./routes/routes")(app);

app.listen(config.appPort,()=>console.log("Server started"));