const express=require("express");
const router=express.Router();
const Student=require("../../db/schemas/studentSchema");


router.get("/",async(req,res)=>{
    const Students = await Student.find();
    res.json(Students);
});


router.post("/",async (req,res) => {
    try{
        const studentData = req.body;
        const newStudent = new Student(studentData);
        await newStudent.save();
        res.json(
            {
                message : 'Student Added successfully',
            }
        );
    } catch(error){
        console.log(error);
        res.statusMessage(500).json({
            message : "Internal server error",
        });
    }
});

router.put("/:id",async(req,res)=>
{
    try{
        const studentId=req.params.id;
        const updateStudentData=req.body;
        await Student.findByIdAndUpdate(studentId,updateStudentData);
        res.json({
            message : "Student Updated successfully",
        });
    } catch(error)
    {
        console.log(error);
        res.status(500).json
({
    message : "Internal server error",
});    }
});
router.delete("/:id",async(req,res)=>
    {
        try{
            const studentId=req.params.id;
            const deleteStudentData=req.body;
            await Student.findByIdAndDelete(studentId,deleteStudentData);
            res.json({
                message : "Student deleted successfully",
            });
        } catch(error)
        {
            console.log(error);
            res.status(500).json
    ({
        message : "Internal server error",
    });    }
    });


module.exports=router;