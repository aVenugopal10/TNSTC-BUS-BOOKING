import React, { useState,useEffect } from 'react'
import './popup.css'


 
export default function Popup({onClose,onLoginSuccess}) {
  const[isLogin,setIsLogin]=useState(true)
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const[conformPassword,setConformPassword]=useState('')
  const[error,setError]=useState('')
  const [userEmail, setUserEmail] = useState('');
  

  useEffect(() => {
  const email = localStorage.getItem("logedInUser",userEmail);
  if (email) {
    setUserEmail(email);
  }
}, []);
  

  const validEmail=(email)=>{
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validPassword=(Password)=>{
    return password.length >= 8;
  }


     const handleLogin= ()=>{
      
     const storedUser= JSON.parse(localStorage.getItem('signupUsers')); 
     
     if(!storedUser){
      setError('No user found, Please signup first')
      return;
    }

    if(storedUser.email !== email || storedUser.password !== password) {
    setError('Invalid email or password');
    return;}
     
    if(!validEmail(email)) {
      setError("Invalid Email");
      return;
    
  }
      if(!validPassword(password)){
        setError('Password must be 8 characters');
        return
      }
       localStorage.setItem('logedInUser', email);
     setError('');
    alert("Login Successful ");
    
    setEmail('')
    setPassword('')
    onLoginSuccess(email)
    
     
     
    }
     
   
    const handleSignup = () => {


    if (!validEmail(email)) {
      setError('Invalid Email');
      return;
    }

    if (!validPassword(password)) {
      setError('Password must be at least 8 characters');
      return;
    }

    if (password !== conformPassword) {
      setError('Passwords do not match');
      return;
    }
     localStorage.setItem('signupUsers', JSON.stringify({ email, password }));

      localStorage.setItem('logedInUser', email);
    
     setError('');
    alert('Signup Successful ');
    setEmail('')
    setPassword('')
    setConformPassword('')
    onLoginSuccess(email)
    
    
    
     
  }
     
    

    return (
    <div className='container'>
    
    <div className='form-container'>
      <div className='popupcontent'>
      <button className="close-btn" onClick={onClose}>✕</button>

      { isLogin?<h1>Login Form</h1>:<h1>Signup Form</h1>}
         <div className='form-toggle'>
          <button  className={isLogin ? 'active' :  ""} onClick={()=>setIsLogin(true)}>Login</button>
          <button className={!isLogin ? 'active' : ""} onClick={()=>setIsLogin (false)}>Signup</button>
          </div>

          {error && <p className="error">{error}</p>}

          {isLogin ? <>
     <div className='form'>
        <input className='log' type="email" placeholder='Enter your Email' value={email} onChange={(e)=> setEmail(e.target.value)}></input>
        <input  className='log' type="Password" placeholder='Enter your password' value={password} onChange={(e)=> setPassword(e.target.value)}></input>
        
        <button className='but' onClick={handleLogin }>Login</button>
      
        <a href='#'>Forget Password</a>
        <p>Not a Member? <a href='#'>Sign Up</a></p>
        
     </div>
     
     </>:<>
     <div className='form'>
      <input className='log' type="email" placeholder='Enter your Email' value={email} onChange={(e)=> setEmail(e.target.value)}></input>
        <input className='log' type="Password" placeholder='Enter your password' value={password} onChange={(e)=> setPassword(e.target.value)}></input>
         <input className='log' type="password" placeholder='conform your password' value={conformPassword} onChange={(e)=> setConformPassword(e.target.value)}></input>
         <button className='but' onClick={handleSignup}>Signup</button>
         
         </div>
     
     
     </>} 
         
     </div>

     
      </div>
    </div>
  )}
     
