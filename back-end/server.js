const express=require('express');
const mysql=require('./db.js')
const app=express();
const cors=require('cors')
const bodyParser=require('body-parser');
const employeeRouter=require('./routes/employeeRoutes.js')
app.use(cors());
app.use(bodyParser.json());
app.use('/api/employee',employeeRouter);

app.listen(4000,()=>{
  console.log("Listening to port 4000")
})