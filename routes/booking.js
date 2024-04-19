// const express = require("express");
// const fs = require("fs");
// const app = express();
// const path = require("path");

// app.use(express.urlencoded({ extended: true }));


// app.post("/Book", (req, res) => {
//   const formData = req.body;

//   let existingData = [];
//   try {
//     const data = fs.readFileSync("../taxi site/jsonData/BookingData.json", "utf8");
//     existingData = JSON.parse(data);
//   } catch (err) {}

//   existingData.push(formData);

//   fs.writeFile(
//     "../taxi site/jsonData/BookingData.json",
//     `[${existingData.map((obj) => JSON.stringify(obj, null, 2)).join(",\n")}]`,
//     (err) => {
//       if (err) {
//         console.error(err);
//         res.status(500).send("Error storing form data");
//         return;
//       }
//       console.log("Form data stored successfully");
//       res.send("success");
//     }
//   );
// });

// module.exports = app;


const express = require("express");
const path = require('path');
const app = express();
const bodyParser = require("body-parser");
require("../db");
const Order = require("../models/BookingData");

app.use(bodyParser.urlencoded({ extended: true }));
const bookpath=path.join(__dirname,'../public');
app.use(express.static(bookpath ));

app.post("/Book", async (req, res) => {
  const formData = req.body;

  try {
    await Order.create(formData);
    console.log("Form data stored successfully");
    res.sendFile(path.join( bookpath,'greetings.html'));
  } catch (err) {
    console.error(err);
    res.status(500).sendFile("Error storing form data");
  }
});

module.exports = app;