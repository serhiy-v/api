const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    password: String
});

mongoose.model("users", userSchema);