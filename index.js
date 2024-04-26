
const express = require("express");
const path = require("path");

const app = express();

const loginData = require("./routes/routes");
const routeRouter = require("./routes/app");
const bookingData = require("./routes/booking");
const contactData = require("./routes/contact");


app.use(loginData);
app.use(routeRouter);
app.use(bookingData);
app.use(contactData);

app.listen(4000, ()=>{
    console.log("Server Started in 4000");
})