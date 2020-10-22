const mongoose = require('mongoose');
const config = require('../config');

const db = mongoose.connect(config.mongoUrl, {useNewUrlParser: true},{useFindAndModify: false})

module.exports = {
    db
};