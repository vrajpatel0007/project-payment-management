const express = require("express");
const routes = express.Router();
const userRoute = require("./user.route");
const projectRoute = require("./project.route");
const paymentRoute = require("./payment.route");

routes.use("/user", userRoute);
routes.use("/project", projectRoute);
routes.use("/payment", paymentRoute);

module.exports = routes;
