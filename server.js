require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Products = require("./models/Products");

const app = express();
app.use(cors());
app.options("*", cors());
app.use(express.json());
app.use((req, res, next) => {
  const { method, url } = req;
  console.log(`${method} ${url}`);
  next();
});

app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

app.get("/products", (req, res) => {
  Products.find().then((product) => {
    res.status(200);
    res.json(product);
  });
});

const { PORT, MONGO_URL } = process.env;

mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const mongodb = mongoose.connection;

mongodb.on("open", () => {
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
});
