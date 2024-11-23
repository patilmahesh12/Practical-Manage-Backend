const Practical = require("../models/Practical");

exports.addPractical = async (req, res) => {
  try {
    const { subjectId, title, description, createdBy } = req.body;
    const practical = new Practical({ subjectId, title, description, createdBy });
    await practical.save();
    res.status(201).json(practical);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }     
};

exports.getPracticals = async (req, res) => {
  try {
    const practicals = await Practical.find().populate("subjectId createdBy enrolledStudents");
    res.status(200).json(practicals);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.enrollPractical = async (req, res) => {
  try {
    const { practicalId, studentId } = req.body;
    const practical = await Practical.findById(practicalId);
    if (!practical.enrolledStudents.includes(studentId)) {
      practical.enrolledStudents.push(studentId);
      await practical.save();
    }
    res.status(200).json(practical);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
