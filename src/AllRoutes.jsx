import React from 'react'
import {Route, Routes} from 'react-router-dom'
import SignUp from './Pages/Login_Signup_Page/SignUp/SignUp'
import Home from './Components/Home/Home'
import DashBoard from './Pages/DashBoard/DashBoard'
const AllRoutes = () => {
  return (
    <Routes>  
        {/* <Route  path='/Auth' element={<SignUp/>} /> */}
        <Route path='/' element={<SignUp/>}/>
         <Route path='/DashBoard' element={<DashBoard/>}/>
        <Route  path='/Home' element={<Home/>} />
    </Routes>
   
  )
}

export default AllRoutes
