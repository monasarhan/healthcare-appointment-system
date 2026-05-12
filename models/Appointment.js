const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
    name: String,
    date: String,
    doctor: String
});

module.exports = mongoose.model("Appointment", appointmentSchema);