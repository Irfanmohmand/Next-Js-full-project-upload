const { mongoose } = require("mongoose");

const employeeModel = new mongoose.Schema({
    name: String,
    salary: String,
    department: String
});

export const Employee = mongoose.model.employees || mongoose.model("Employee", employeeModel);