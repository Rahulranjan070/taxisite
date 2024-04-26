const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
username: { type: String, required: true },
email: { type: String, required: true,  },
Contact: { type: Number, required: true,  },
message: { type: String, required: true },
 
});

const Contactuser = mongoose.model("Contactdetails", ContactSchema);

module.exports = Contactuser;