import { configureStore } from "@reduxjs/toolkit";
import employeeSlice from "./employeeSlice";

const employeeStore=configureStore({
  reducer:{
    employee:employeeSlice.reducer,
  }
})

export default employeeStore;