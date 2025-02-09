const Alumni = require("../models/Alumni");

// Get all alumni
const getAllAlumni = async (req, res) => {
  try {
    const alumni = await Alumni.find();
    res.json(alumni);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Search alumni by name, location, or graduation year
const searchAlumni = async (req, res) => {
  try {
    const { name, location, graduationYear } = req.query;
    let query = {};

    if (name) query.name = new RegExp(name, "i"); // Case-insensitive
    if (location) query.location = new RegExp(location, "i");
    if (graduationYear) query.graduationYear = graduationYear;

    const alumni = await Alumni.find(query);
    res.json(alumni);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add new alumni
const addAlumni = async (req, res) => {
  try {
    const { name, email, location, graduationYear } = req.body;
    const newAlumni = new Alumni({ name, email, location, graduationYear });

    await newAlumni.save();
    res.status(201).json(newAlumni);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getAllAlumni, searchAlumni, addAlumni };
