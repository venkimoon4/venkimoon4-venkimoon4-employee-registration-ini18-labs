import React from 'react'
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header>
      
      <div className='left-section'>
       <h2>Employee Registration</h2>
      </div>

      <div className='right-section'>

      <div>
      <Link style={{color:"white",textDecoration:"none"}} to="/"> 
      <IoHomeOutline/>
      <p>Home</p>
      </Link> 
      </div>  
      
      <div>
      <Link style={{color:"white",textDecoration:"none"}} to="/create">
      <IoIosAddCircleOutline/>
      <p>Create</p>
      </Link>
      </div>

      </div>

    </header>
  )
}

export default Header
