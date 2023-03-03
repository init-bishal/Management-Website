import React from 'react'
import { useState } from 'react'
import '../../../App.css'
import './SignupRightSide.css'
import { Link } from 'react-router-dom'
import DashBoard from '../../DashBoard/DashBoard'
const SignupRightSide = () => {
   const [isSignup,setIsSignup]=useState(false)
   const handleCheck=()=>{
    setIsSignup(!isSignup)
   }
  return (
 
<section className='signup'>
       
            
            <section>

             
            <div className='color'></div>
            <div className='color'></div>
            <div className='color'></div>
            <div className='box'>
                 <div className='box1'></div>
                 <div className='box2'></div>
                 <div className='box3'></div>
                 <div className='box4'></div>
                 <div className='box5'></div>
                 <div className='box6'></div>
                <div className='container'>
                    <div className='form'>
                        {!isSignup && (
                            <h2>Registration form</h2>     
                        )}
                        {isSignup && (
                            <h2>Login form</h2>
                        )
                        }
                        <form>
                            
                            <div className='inputbox'>
                                <input type="text" placeholder='Username' />
                            </div>
                            {!isSignup && (
                                <div className='inputbox'>
                                <input type="email" placeholder='@gmail.com' />
                            </div>)
                             }
                            <div className='inputbox'>
                                <input type="password" placeholder='Password' />
                            </div>
                            <div className='inputbox loginbutton '>
                                {isSignup ?
                                 <Link to='/DashBoard'>
                                 <input type="submit" value='Login'
                                    onClick={
                                        console.log("Login clicked")
                                    }
                                />
                                </Link>
                                : <input type="submit" value='Sign Up'
                                   onClick={
                                        console.log("Login clicked")
                                    }
                                />}
                                
                            </div>

                            <p className='forget'>Forgot Password?<button type='button' className='btn-click'>Click here</button></p>
                            <p className='forget'>Don't have an account <button type='button' className='btn-click' onClick={handleCheck}>
                            {isSignup ? 'Sign up' : 'Log in'}
                            </button></p>
                        </form>
                    </div>
                </div>
            </div>
            </section>
            
    </section>
  )
}

export default SignupRightSide
