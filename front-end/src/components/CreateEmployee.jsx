import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { employeeActions } from '../store/employeeSlice';
import { insertEmployeeData } from '../controllers/employeeController';
import { useNavigate } from 'react-router-dom';

const CreateEmployee = () => {

  const firstNameRef=useRef();
  const lastNameRef=useRef();
  const ageRef=useRef();
  const genderRef=useRef();
  const emailRef=useRef();
  const phoneNoRef=useRef();
  const salaryRef=useRef();

  const navigate=useNavigate();

  const dispatch=useDispatch();
  const employee=useSelector((store)=>store.employee)


  const handleCreateEmployee=async(e)=>{

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

    await insertEmployeeData(obj);

     navigate('/')
  }

  return (
    <div className='main-form-container'>
      <h1>Create an Employee</h1>
    <div className='form-container'>
      <form onSubmit={handleCreateEmployee}>
        <div>
          <label>First Name</label>
          <input ref={firstNameRef} type='text'></input>
        </div>
        <div>
          <label>Last Name</label>
          <input ref={lastNameRef} type='text'></input>
        </div>
        <div>
          <label>Age</label>
          <input ref={ageRef} type='text'></input>
        </div>
        <div>
          <label>Gender</label>
          <select ref={genderRef}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div>
          <label>Email</label>
          <input ref={emailRef} type='text'></input>
        </div>
        <div>
          <label>Phone No.</label>
          <input ref={phoneNoRef} type='text'></input>
        </div>
        <div>
          <label>Salary</label>
          <input ref={salaryRef} type='text'></input>
        </div>

        <button>Submit</button>
      </form>
    </div>
    </div>
  )
}

export default CreateEmployee
