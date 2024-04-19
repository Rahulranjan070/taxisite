
const express = require("express");
const path = require("path");

const app = express();

const loginData = require("../Taxi-booking-website/routes/routes");
const routeRouter = require("../Taxi-booking-website/routes/app");
const bookingData = require("../Taxi-booking-website/routes/booking")
const contactData = require("../Taxi-booking-website/routes/contact")


app.use(loginData);
app.use(routeRouter);
app.use(bookingData);
app.use(contactData);

app.listen(4000, ()=>{
    console.log("Server Started in 4000");
})
