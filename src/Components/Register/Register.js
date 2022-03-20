import React, { useState } from 'react';
import { NavLink, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/UseAuth';
import './Register.css'

const Register = () => {
  const [loginFromData , setLoginFromData] = useState({})

  const { user , authError, registerUser , isLoading} = useAuth()

  const handleOnChange = e => {
      const field = e.target.name
      const value = e.target.value
      console.log(field, value)
      const newLogindata = {...loginFromData}
      newLogindata[field] = value
      console.log(newLogindata)
      setLoginFromData(newLogindata)

  }

  const handleRegisterSubmit = e => {
    if(loginFromData.password !== loginFromData.password2){
      alert('password is not match')
      return
  }
  registerUser(loginFromData.email, loginFromData.password)
      e.preventDefault()
    
  }
  return (
    <div>
              <div className='main-section'>
            <div className='log-con'>
            <header className='header-font'>Register Form</header>
           {!isLoading && <form  className='form-intro' action="" onSubmit={handleRegisterSubmit} >
                <div className='input-field'>
                    <input
                     className='input-style' type="name" 
                     name='name'
                     label='name'
                     id="inputEmail3"
                     onBlur={handleOnChange}  
                     required 
                     
                     />
                    <label htmlFor=""> Username</label>
                </div>
                <div className='input-field'>
                    <input
                     className='input-style' type="email" 
                     name='email'
                     label='email'
                     id="inputEmail3"
                     onBlur={handleOnChange}  
                     required 
                     
                     />
                    <label htmlFor="">Email </label>
                </div>
                <div className='input-field'>
                    <input className='input-style'
                      type="password" 
                      required 
                      name='password'
                      onBlur={handleOnChange}  
                    label='password'
                    id="inputPassword3"
                      
                      />
                    <label htmlFor="">Password</label>
                </div>
                <div className='input-field'>
                    <input className='input-style'
                      type="password" 
                      required 
                      name='password2'
                      id="inputPassword3"
                      onBlur={handleOnChange}  
                    label='password'
                      
                      />
                    <label htmlFor="">Re-type Password</label>
                </div>
                <NavLink as={Link} to='/login'  >Already Registered ?</NavLink>

                <div className='button'>
                    <div className='inner'></div>
                    <button className='from-button'  
                    type='submit'
                    >Register</button>
                   
                </div>
            </form>}
            {isLoading &&   <Spinner animation="border" variant="info" />}
            {user?.email && <h6 style={{paddingTop:'20px'}}>register successfull</h6> }
            {authError && <h2>{authError }</h2> }
        </div>
      </div>
    </div>
  );
};

export default Register;