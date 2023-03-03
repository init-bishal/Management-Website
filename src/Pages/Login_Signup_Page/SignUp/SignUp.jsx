import React from 'react'
import '../../../App.css'
// import SignUpLeftSide from '../SignUpLeftSide/SignUpLeftSide'
// import SignupRightSide from '../SignupRIghtSide/SignupRightSide'
import {Box,Card,CardContent,Typography} from '@mui/material'
import SignUpLeftSide from '../SignupLeftSide/SignupLeftSide'
import SignupRightSide from '../SignupRIghtSide/SignupRightSide'
import {Button,Stack,TextField,Checkbox} from '@mui/material'
import { FormControlLabel} from '@mui/material'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const SignUp = () => {
  
  return (
    <Box className='main-signup'>
      <SignUpLeftSide/>
      <SignupRightSide/>
      
    </Box>
  )
}

export default SignUp
