import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import DisplayEmployee from './components/DisplayEmployee.jsx'
import CreateEmployee from './components/CreateEmployee.jsx'
import UpdateEmployee from './components/UpdateEmployee.jsx'
import { Provider } from "react-redux"
import employeeStore from './store/index.js'

const router=createBrowserRouter([{
  path:'/' , element:<App/> , children:[{
    path:"/",element:<DisplayEmployee/>
  },{path:"/create", element:<CreateEmployee/>},{path:"/update",element:<UpdateEmployee/>}]
}])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={employeeStore}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
