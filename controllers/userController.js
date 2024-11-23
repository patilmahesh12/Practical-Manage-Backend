import User from "../models/User.js";

export const createUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const user = new User({ name, email, password, role });
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getUsersByRole = async (req, res, role) => {
  try {
    const users = await User.find({ role });
    res.status(200).json(users);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
