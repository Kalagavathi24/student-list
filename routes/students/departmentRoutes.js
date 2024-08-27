const express=require("express");
const router=express.Router();
const Department=require("../../db/schemas/departmentSchema");

router.get("/",async(req,res)=>{
    const departments = await Department.find();
    res.json(departments);
});


router.post("/",async (req,res) => {
    try{
        const departmentData = req.body;
        const newDepartment = new Department(departmentData);
        await newDepartment.save();
        res.json(
            {
                message : 'Department Added successfully',
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
        const departmentId=req.params.id;
        const updateDepartmentData=req.body;
        await Department.findByIdAndUpdate(departmentId,updateDepartmentData);
        res.json({
            message : "Department Updated successfully",
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
            const departmentId=req.params.id;
            const deleteDepartmentData=req.body;
            await Department.findByIdAndDelete(departmentId,deletedepartmentData);
            res.json({
                message : "Department deleted successfully",
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