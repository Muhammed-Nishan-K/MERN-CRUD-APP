import React, { useState } from 'react';
import './Userlogin.css';
import { Link ,useNavigate } from 'react-router-dom';
import axios from 'axios'
const sessionId = 'your_session_id';
axios.defaults.withCredentials = true;

export default function Userlogin() {
  // State to store input values
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Event handler for email input
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Event handler for password input
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const Navigate=useNavigate()
  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3002/userdata',{email,password},{
      headers: {
        // You might need to include additional headers based on your server's requirements
        'Authorization': `Bearer ${sessionId}`,
      },
    }).then((data)=>{

        if(data.data.length!=0){
            Navigate('/userhome')
        }
    })
  };



  return (
    <>
      <div className="main-a">
        <div className="container">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <input
                id='email'
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
            <button type="submit" className="btn">Login</button>
            <p className="text">Don't have an account? <Link to='/register'>Register</Link></p>
          </form>
        </div>
      </div>
    </>
  );
}
