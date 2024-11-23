import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

import userRoutes from "../routes/userRoutes.js";
import subjectRoutes from "../routes/subjectRoutes.js";
import practicalRoutes from "../routes/practicalRoutes.js";

const app = express();

app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/subjects", subjectRoutes);
app.use("/api/practicals", practicalRoutes);

mongoose
  .connect(process.env.MONGO_URI) 
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server running on port ${process.env.PORT || 3000}`);
    });
  })
  .catch((err) => console.error("MongoDB connection error:", err));
