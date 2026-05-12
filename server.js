const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(express.json());

// MongoDB Local Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Local Connected ✅"))
.catch(err => console.log("DB Error:", err));

// Routes
const appointmentRoutes = require("./routes/appointmentRoutes");
app.use("/api/appointments", appointmentRoutes);

// Test Route
app.get("/", (req, res) => {
    res.send("Healthcare API is working 🚀");
});

// Server
app.listen(5000, () => {
    console.log("Server running on port 5000");
});