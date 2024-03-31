import React, { useEffect } from 'react'
import { FaUserPen } from "react-icons/fa6";
import { MdOutlineDelete } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { employeeActions } from '../store/employeeSlice';
import { deleteEmployeeData, getEmployeeData } from '../controllers/employeeController';
const DisplayEmployee = () => {

  const employee=useSelector((store)=>store.employee);

  const dispatch=useDispatch()

  const fetchEmployeeDataFromServer=async()=>{
    const data =await getEmployeeData();
    dispatch(employeeActions.addEmployee(data))
  }

  useEffect(()=>{
    fetchEmployeeDataFromServer();
  },[])

  const handleRemoveEmployee=async(id)=>{
  const data=await deleteEmployeeData(id)
  dispatch(employeeActions.deleteEmployee(id))
  }
  

return (

<div>  
{employee.map((data,i)=>{
  return <div key={i} className="card border-success mb-3" style={{maxWidth: "30rem"}}>
  <div className="card-header">
    <p>Employee Id : {data.id}</p>
  <div className='card-operations'>
    <div>
      <Link style={{color:"green",textDecoration:"none"}} to="/update" state={data}>
      <FaUserPen/>
      </Link>
    </div>
    <div>
      <MdOutlineDelete style={{color:"red",textDecoration:"none"}} onClick={()=>handleRemoveEmployee(data.id)}/>
    </div>
   </div>
  </div>
  <div className="card-body text-success">
    <p className="card-title">Name : {data.firstName} {data.lastName}</p>
    <p className="card-text">Age : {data.age}</p>
    <p className="card-text">Gender : {data.gender}</p>
    <p className="card-text">Email : {data.email}</p>
    <p className="card-text">Phone : {data.phoneNo}</p>
    <p className="card-text">Salary : {data.salary}</p>
  </div>
  </div>
})}

    </div>
  )
}

export default DisplayEmployee
