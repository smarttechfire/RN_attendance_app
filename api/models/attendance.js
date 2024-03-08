const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
    empId: {
        type: String,
        required: true,
        unique: true,
      },
      empName: {
        type: String,
        required: true,
      },
      date: {
        type: String,
        required: true,
      },
      status:{
        type:String,
        require: true,
      }
})
const Attendance = mongoose.model("Attendance",attendanceSchema);

module.exports = Attendance;