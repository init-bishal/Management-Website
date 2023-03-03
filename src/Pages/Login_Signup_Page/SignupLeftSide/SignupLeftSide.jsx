import './SignupLeftSide.css'
import React from 'react'
import {Box,Card,CardContent,Typography} from '@mui/material'
import {Button,Stack} from '@mui/material'
import SportsBarSharpIcon from '@mui/icons-material/SportsBarSharp';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import logo192 from '../../../Components/assets/logo192.png'
import iic1 from '../../../Components/assets/iic1.png'
import '../../../App.css'
import { Link } from "react-router-dom"
const SignUpLeftSide = () => {
  return (
    <Box className="container">
        <div className='color'></div>
        <div className='color'></div>
        <div className='color'></div>
        <div className='card-left'>
            
                 <div className='logo-img'>
                  <Link to='/Home'>
                  <img src={iic1} alt="failed" width='50px'/>
                  </Link>
                 </div>
                 <div className='left-side-txt'>
                 <Typography variant='h6' color='white' gutterBottom  id='left-side-txt-1'>Plan your activities and control your</Typography>
                 <Typography variant='h6' color='white' gutterBottom >progress online</Typography>
                 </div>
                 <div className='sign-image'>
                 <center>
                  <img src={iic1} alt="failed" width='300px' height='300px'/>
                 </center>
                 </div>
       </div>
    </Box>
  )
}

export default SignUpLeftSide
