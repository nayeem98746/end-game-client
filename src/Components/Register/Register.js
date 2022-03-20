import React from 'react';
import './Register.css'

const Register = () => {
    return (
        <div className='main-section'>
        <div className='container'>
        <header className='header-font'>Login Form</header>
        <form  className='form-intro' action="" >
            <div className='input-field'>
                <input
                 className='input-style' type="text" 
                 name='name'
                 label='name'
                //  onBlur={handleOnBlur}  
                 required 
                 
                 />
                <label htmlFor=""> Username</label>
            </div>
            <div className='input-field'>
                <input
                 className='input-style' type="email" 
                 name='email'
                 label='email'
                //  onBlur={handleOnBlur}  
                 required 
                 
                 />
                <label htmlFor="">Email </label>
            </div>
            <div className='input-field'>
                <input className='input-style'
                  type="password" 
                  required 
                  name='password'
                //   onBlur={handleOnBlur}  
                label='password'
                  
                  />
                <label htmlFor="">Password</label>
            </div>
            <div className='input-field'>
                <input className='input-style'
                  type="password" 
                  required 
                  name='password'
                //   onBlur={handleOnBlur}  
                label='password'
                  
                  />
                <label htmlFor="">Re-type Password</label>
            </div>
            <div className='button'>
                <div className='inner'></div>
                <button className='from-button'  
                type='submit'
                >Register</button>
               
            </div>
        </form>
    </div>
  </div>
    );
};

export default Register;