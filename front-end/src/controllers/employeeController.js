const getEmployeeData=async()=>{

  const res=await fetch("http://localhost:4000/api/employee",{
    method:"GET"
  })

  const data=await res.json();
  return data;
}


const insertEmployeeData=async(obj)=>{
  const res=await fetch("http://localhost:4000/api/employee",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(obj)
  })
}

const updateEmployeeData=async(id,obj)=>{
  const res=await fetch(`http://localhost:4000/api/employee/${id}`,{
    method:"PUT",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(obj)
  })
}


const deleteEmployeeData=async(id)=>{
  const res=await fetch(`http://localhost:4000/api/employee/${id}`,{
    method:"DELETE",
})
}
export {getEmployeeData,insertEmployeeData,updateEmployeeData,deleteEmployeeData};