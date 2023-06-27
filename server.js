const express = require("express");
const dotenv = require("dotenv").config();
const bodyParser = require("body-parser");
const api = require("./Api/api");
const mongoose = require("mongoose");
const cors = require("cors");
// start
const app = express();
// consts
const PORT = process.env.PORT;
const URI = process.env.URI;
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use(cors());
//listen and api
app.use(api);
//DB
const connect = async () => {
  await mongoose.connect(URI).then(() => {
    console.log("DB is connected");
  });
};
connect();
app.listen(PORT, () => {
  console.log(`Online on ${PORT}`);
});
