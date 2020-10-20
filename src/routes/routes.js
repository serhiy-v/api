const products = require('../controllers/product');

module.exports = (app) => {
app
.get("/products", products.getAll)
.get("/products/:id",products.getOne)
.post("/products",products.create)
.put("/products/:id",products.update)
.delete("/products/:id",products.remove);
};