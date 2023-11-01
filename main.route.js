const routes = require("express").Router();

const productRoutes = require("./routes/productRoute");

routes.use("/product", productRoutes);

module.exports = routes;
