const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  empId: {
    type: String,
    required: true,
    unique: true,
  },
  empName: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  joiningDate: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  activeEmp: {
    type: Boolean,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  createdDate: {
    type: Date,
    default: Date.now
  }
});


const Emp = mongoose.model("Employee",employeeSchema);

module.exports = Emp;