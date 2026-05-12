const express = require("express");
const router = express.Router();
const Appointment = require("../models/Appointment");

// ➤ Create appointment
router.post("/", async (req, res) => {
    try {
        const appointment = new Appointment(req.body);
        await appointment.save();
        res.json(appointment);
    } catch (err) {
        res.status(500).json(err);
    }
});

// ➤ Get all appointments
router.get("/", async (req, res) => {
    try {
        const appointments = await Appointment.find();
        res.json(appointments);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;