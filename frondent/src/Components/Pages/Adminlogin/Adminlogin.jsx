import { useState } from 'react'
import './Adminlogin.css'
import { useNavigate } from 'react-router-dom';
export default function Adminlogin() {
    const admin={
        emial:'admin@gmail.com',
        password:'1234'
    }
    // State to store input values
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Event handler for email input
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const navigate=useNavigate();

  // Event handler for password input
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(email==admin.emial&&password==admin.password)
    {
        navigate('/adminhome')
    }

  }

  return (
    <>
    <div className="main-a">
        <div className="container">
            <h1>Admin Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <input type="text" required name="email" 
                    value={email}
                    onChange={handleEmailChange}
                    placeholder='Email'/>
                </div>
                <div className="form-control">
                    <input type="password" required name="password" 
                    placeholder='Password'
                    value={password}
                    onChange={handlePasswordChange}
                    />
                </div>
                <button className="btn">Login</button>
            </form>
        </div>
    </div>
    
    </>
  )
}
