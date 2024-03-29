import { createSlice } from "@reduxjs/toolkit"

const employeeSlice=createSlice({
  name:"employee",
  initialState:[],
  reducers:{
    addEmployee:(state,action)=>{
    return action.payload;
    },
    deleteEmployee:(state,action)=>{
    const id=action.payload;
    return state.filter((emp)=>emp.id!==id)
    }
  }
}
)


export const employeeActions=employeeSlice.actions;

export default employeeSlice;