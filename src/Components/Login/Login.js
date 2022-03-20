import React, { useState } from 'react';
import './Login.css'
import { Link, NavLink } from 'react-router-dom';

const Login = () => {
    const [loginFromData , setLoginFromData] = useState({})

    const handleOnChange = e => {
        const field = e.target.name
        const value = e.target.value
        console.log(field, value)
        const newLogindata = {...loginFromData}
        newLogindata[field] = value
        console.log(newLogindata)
        setLoginFromData(newLogindata)

    }

    const handleLoginSubmit = e => {
        e.preventDefault()
      
    }

    return (
        <div className='main-section'>
        <div className='container'>
        <header className='header-font'>Login Form</header>
        <form onSubmit={handleLoginSubmit}  className='form-intro' action=""  >
            <div className='input-field'>
                <input
                 className='input-style' type="email" 
                 name='email'
                 label='email'
                 onBlur={handleOnChange}  
                 required 
                 
                 />
                <label htmlFor="">Email or Username</label>
            </div>
            <div className='input-field'>
                <input className='input-style'
                  type="password" 
                  required 
                  name='password'
                  onBlur={handleOnChange}  
                  label='password'
                  
                  />
                <label htmlFor="">Password</label>
            </div>
            <div className='button'>
                <div className='inner'></div>
                <button className='from-button'  
                type='submit'
                >Login</button>
                <NavLink className='register-btn' as={Link} to='/register' >Please Register</NavLink>
            </div>
        </form>
    </div>
  </div>
    );
};

export default Login;