import Subject from "../models/Subject.js";

export const addSubject = async (req, res) => {
  try {
    const { name, code, createdBy } = req.body;
    const subject = new Subject({ name, code, createdBy });
    await subject.save();
    res.status(201).json(subject);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getAllSubjects = async (req, res) => {
  try {
    const subjects = await Subject.find();
    res.status(200).json(subjects);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
