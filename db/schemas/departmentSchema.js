const mongooese = require("mongoose");

const departmentSchema = new mongooese.Schema({
  departmentname: {
    type: String,
    required: true,
    unique: true,
  },
  departmentid: {
    type: Number,
    required: true,
  }
});

const Department = mongooese.model("Department", departmentSchema);

module.exports = Department;