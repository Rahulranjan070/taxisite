
const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: Number, required: true, unique: true },
  type: { type: String, required: true },
  date: {type: String, required: true},
  startTime:{ type:String, required:true},
  endTime: { type: String, required: true},
});

const Buser = mongoose.model("BookingData", BookingSchema);

module.exports = Buser;