const mongooese = require("mongoose");

const studentSchema = new mongooese.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  regno: {
    type: String,
    required: true,
  },
  DateofBirth: {
    type: Date,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  departmentid: {
    type: Number,
    required: true,
  },
});

const Student = mongooese.model("Student", studentSchema);

module.exports = Student;