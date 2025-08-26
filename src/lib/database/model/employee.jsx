import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
  name: String,
  department: String,
  salary: Number,
}, { timestamps: true });

// ✅ check mongoose.models to avoid overwrite
export const Employee =
  mongoose.models.Employee || mongoose.model("Employee", employeeSchema);
