const products = require('../controllers/product');
const auth = require('../controllers/auth');
const authMiddleware = require('../middleware/auth');

module.exports = (app) => {
app
.get("/products",authMiddleware, products.getAll)
.get("/products/:id",authMiddleware,products.getOne)
.post("/products",authMiddleware,products.create)
.put("/products/:id",authMiddleware,products.update)
.delete("/products/:id",authMiddleware,products.remove)
.post("/signin", auth.signIn)
};