const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    price: mongoose.Schema.Types.Decimal128,
    category: String,
    provider: String,
    date: Date,
    weight: mongoose.Schema.Types.Decimal128,
    amount: Number
});

mongoose.model("products", productSchema);