const express = require("express");
const router = express.Router();

const Tablefinal = require("../models/tablefinal");

// Create a new schedule
router.post("/add", async (req, res) => {
  try {
    const scheduleData = req.body;
    const schedule = new Tablefinal(scheduleData);
    await schedule.save();
    res.status(201).json(schedule);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get all schedules
router.get("/all", async (req, res) => {
  try {
    const schedules = await Tablefinal.find();
    res.status(200).json(schedules);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
