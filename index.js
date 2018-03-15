const express = require("express");
const serverApp = express();
const mongoose = require("mongoose");

require("dotenv").config();

mongoose.connect(process.env.MONGO_URI);
const PORT = process.env.PORT || 5000; //necessary for Heroku deployment

//routers
const productRouter = require("./routers/products");

serverApp.use(productRouter); //register the router with the application

serverApp.get("/", (req, res) => {
  res.send(
    "i want some food maybe a fish taco or sandwich i also really want to eat this poptart"
  );
});

serverApp.listen(PORT, () => {
  console.log(`Now listening on port ${PORT}`);
});
