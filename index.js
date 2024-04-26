
const express = require("express");
const path = require("path");

const app = express();

const loginData = require("../taxi site/routes/routes");
const routeRouter = require("../taxi site/routes/app");
const bookingData = require("../taxi site/routes/booking")
const contactData = require("../taxi site/routes/contact")


app.use(loginData);
app.use(routeRouter);
app.use(bookingData);
app.use(contactData);

app.listen(4000, ()=>{
    console.log("Server Started in 4000");
})