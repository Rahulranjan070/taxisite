
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require("../db");
const Contact = require("../models/ContactData");

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/cont", async (req, res) => {
  const ContData = req.body;

  try {
    await Contact.create(ContData);
    console.log("Form data stored successfully");
    res.send("success");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error storing form data");
  }
});

module.exports = app;