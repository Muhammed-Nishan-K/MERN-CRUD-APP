import React, { useState } from 'react';
import './Userregister.css';
import { Link ,useNavigate } from 'react-router-dom';
import axios from 'axios'

export default function Userregister() {
  // State to store input values
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Event handler for email input
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Event handler for password input
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Event handler for confirm password input
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    
  };
  const Navigate=useNavigate();

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3002/registeruser',{email,password}).then(responce=>{
        if(responce.data.status==true){
                Navigate('/');
        }
    }) 
  }; 

  return (
    <>
      <div className="main-a-1">
        <div className="container">
          <h1>SignUp</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <input
                type="text"
                required
                name="email"
                placeholder='Email'
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="form-control">
              <input
                type="password"
                required
                name="password"
                placeholder='Password'
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <div className="form-control">
              <input
                type="password"
                required
                name="cpassword"
                placeholder='Confirm Password'
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />
            </div>
            <button type="submit" className="btn">Register</button>
            <p className="text">Already have an account? <Link to='/'>Log In</Link></p>
          </form>
        </div>
      </div>
    </>
  );
}
