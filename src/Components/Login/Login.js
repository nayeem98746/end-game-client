import React, { useState } from 'react';
import './Login.css'
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/UseAuth';
import { Button, Modal, Spinner } from 'react-bootstrap';
import google from '../../Images/google.png'

const Login = () => {
    const [loginFromData , setLoginFromData] = useState({})
    const {user,googleSignIn,  loginUser, isLoading,authError, modal, setModal} = useAuth()


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
        loginUser(loginFromData.email, loginFromData.password )
        e.preventDefault()
      
    }

    return (
        <div className='main-section'>
             <Modal show={modal}>
        <Modal.Header>
          <Modal.Title>Login Successful !</Modal.Title>
        </Modal.Header>
        <Modal.Body>Hello Mr./Ms. {user?.displayName} You have successfully logged in !</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={ ()=>setModal(false)}>
            <Link style={{color:'white',textDecoration:'none'}} to="/">Go To Home</Link>
          </Button>
        </Modal.Footer>
      </Modal>
        <div className='log-con'>
        <header className='header-font'>Login Form</header>
     {!isLoading &&   <form onSubmit={handleLoginSubmit}  className='form-intro' action=""  >
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
          
            <button className="button" onClick={ ()=> googleSignIn() }>  <img style={{width:'30px', marginLeft:'30px'}} src={google} alt="" /> GooglesignIn</button>
        </form>}
        {isLoading &&   <Spinner animation="border" variant="info" />}
            {user?.email && <h6 style={{paddingTop:'50px'}}>register successfull</h6> }
            {authError && <h6 style={{paddingTop:'50px'}}>{authError }</h6> }
    </div>
  </div>
    );
};

export default Login;