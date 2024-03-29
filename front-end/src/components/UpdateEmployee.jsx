import React, { useRef, useState } from 'react'
import { updateEmployeeData } from '../controllers/employeeController';
import { useLocation, useNavigate } from "react-router-dom"
const UpdateEmployee = () => {

  const firstNameRef=useRef();
  const lastNameRef=useRef();
  const ageRef=useRef();
  const genderRef=useRef();
  const emailRef=useRef();
  const phoneNoRef=useRef();
  const salaryRef=useRef();

  const navigate=useNavigate();

  const {state} = useLocation()


  const handleUpdateEmployee=async(e)=>{

    e.preventDefault();


    const obj={
      firstName:firstNameRef.current.value,
      lastName:lastNameRef.current.value,
      age:Number(ageRef.current.value),
      gender:genderRef.current.value,
      email:emailRef.current.value,
      phoneNo:phoneNoRef.current.value,
      salary:Number(salaryRef.current.value)
    }

    const data=await updateEmployeeData(state.id,obj)

     navigate('/')

  }

  

  return (
    <div className='main-form-container'>
      <h1>Update an Employee</h1>
    <div className='form-container'>
      <form onSubmit={handleUpdateEmployee}>
      <div>
          <label>First Name</label>
          <input  ref={firstNameRef} onChange={(e)=>{
            
          }}  type='text'></input>
        </div>
        <div>
          <label>Last Name</label>
          <input  onChange={(e)=>{
            
          }}  ref={lastNameRef} type='text'></input>
        </div>
        <div>
          <label>Age</label>
          <input  onChange={(e)=>{
            
          }}  ref={ageRef} type='text'></input>
        </div>
        <div>
          <label>Gender</label>
          <select  onChange={(e)=>{
            
          }}  ref={genderRef}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div>
          <label>Email</label >
          <input onChange={(e)=>{
            
          }}  ref={emailRef} type='text'></input>
        </div>
        <div>
          <label>Phone No.</label>
          <input onChange={(e)=>{
            
          }} ref={phoneNoRef} type='text'></input>
        </div>
        <div>
          <label>Salary</label>
          <input onChange={(e)=>{
            
          }}  ref={salaryRef} type='text'></input>
        </div>

        <button>Update</button>
      </form>
    </div>
    </div>
  )
}

export default UpdateEmployee
