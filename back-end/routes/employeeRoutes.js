const express=require('express')

const router=express.Router();
const db=require("../db.js")

router.get('/',async(req,res)=>{

  try{
   const [data]=await db.query('SELECT * FROM employee')
   res.status(200).json(data)
  }
  catch(error){
    res.status(500).json({error:error.message})
  }

})


router.post("/",async(req,res)=>{

  const data=req.body;

  try{
   const employee=await db.query('INSERT INTO employee (firstName,lastName,age,gender,email,phoneNo,salary) VALUES (?,?,?,?,?,?,?)',[data.firstName,data.lastName,data.age,data.gender,data.email,data.phoneNo,data.salary])
   res.status(200).json({message:"Inserted Succesfully"})
  }
  catch(error){
    res.status(500).json({error:error.message})
  }

})

router.put('/:id',async(req,res)=>{
  try{
   
    const id=req.params.id;
    const data=req.body;

    const employee=await db.query('UPDATE employee SET firstName=? , lastName=? , age=? , gender=? , email=? , phoneNo=? , salary=? WHERE id=?',[data.firstName,data.lastName,data.age,data.gender,data.email,data.phoneNo,data.salary,id])
    res.status(200).json({message:"Updated Sucessfully"})
  }
  catch(error){
    res.status(500).json({error:error.message})
  }
})


router.delete('/:id',async(req,res)=>{

  try{
   const id=req.params.id;
   const employee=await db.query('DELETE FROM employee WHERE id=?',[id])
   res.status(200).json({message:"Deleted Succesfully"})
  }
  catch(error){
    res.status(500).json({error:error.message})
  }

})

module.exports=router;