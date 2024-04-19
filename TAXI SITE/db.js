const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://rahul:rahul1245@rahulranjan07.sre6gnp.mongodb.net/",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error",console.error.bind(console, "connection error:"));
db.once("open",  function(){
    console.log("Connected to Database");
});