require("dotenv").config();
const studentRoutes=require("./routes/students/studentRoutes");
const departmentRoutes=require("./routes/students/departmentRoutes");
const express= require("express");
const db = require("./db/schemas/index");

const app=new express();
const port=process.env.PORT || 8080;

app.use(express.json());

app.use("/students",studentRoutes);
app.use("/departments",departmentRoutes);

db();
app.listen(port, () => {
    console.log(`Express app listening at http://localhost:${port}`);
});