import React from "react";
import "./Login.css";
import { useState } from "react";
import { FiEye, FiEyeOff}   from "react-icons/fi";
import { Link } from "react-router-dom";
import {toast} from "react-toastify";
import { useNavigate } from "react-router-dom";
import { instance } from "../../api";

const Login = () => {
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePasswordToggle= (e) => {
    e.preventDefault();
    setLoading(true);
    setIsVisiblePassword(true)
    instance.post("/api/auth/login", {
      email,
      password
    })
    .then(response =>{
      toast.success("You logged in successfully")
      localStorage.setItem("token", response.data.token)
      console.log(response.data);
      navigate("/")
      console.log(response)
    })
    .catch(error =>{
      toast.error("You logged in unsuccessfully")
      console.log(error);
    })
    .finally( () => {
      setLoading(false);
      setEmail("");
      setPassword("");
    })
  }


  return (
    <>
      <div className="card" onSubmit={handlePasswordToggle}>
        <h2 className="medium-img" >DIYORBEK</h2>
        <p className="login-title">Login</p>
        <form>
        <input className="login-input" type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
        <div  className="log-div" key={isVisiblePassword}>
          <input className="login-pass"  type="{isVisiblePassword ? 'text ': 'password'}" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
          {
            isVisiblePassword ? <FiEye onClick={ () => setIsVisiblePassword(false)} className="log-eye"/> : <FiEyeOff onClick={ () => setIsVisiblePassword(true)} className="log-eye" />
          }
        </div>
         <div className="login-register">
           <p className="login-text">Don't you have an account?</p>
           <Link className="login-link" to={"/signup"}>Sign Up.</Link>
         </div>
        <button to="/signup" className="login-btn" disabled={loading}>{loading ? "Loading..." :  "Login"}</button>
        </form>
      </div>
    </>
  );
};

export default Login;


// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
// import {FiEye , FiEyeOff} from 'react-icons/fi'
// import {toast} from 'react-toastify'
// import { instance } from '../../api'
// import { useNavigate } from 'react-router-dom'



// const Login = () => {
//   const navigate = useNavigate()
//   const [isVisiblePassword, setIsVisiblePassword] = useState(false)
//   const [email , setEmail] = useState("")
//   const [password , setPassword] = useState("")
//   const [loading , setLoading] = useState(false)
  
//   const handleLoginUser = (e) => {
//     e.preventDefault();
//     setLoading(true)
//     instance.post("/api/auth/login", {
//       email,
//       password
//     }).then(response => {
//       toast.success("You logged in successfully")
//       localStorage.setItem("token" , response.data.token)
//       console.log(response.data);
//       navigate("/")
//       console.log(response)})
//     .catch(error => {
//       toast.error("You logged in unsuccessfully")
//       console.log(error)})
//       .finally( () => {
//         setLoading(false)
//         setEmail("")
//         setPassword("")
//       })
//   }
  
//   return (
//     <>
//     {/* {loading ? <h1>Loading...</h1> :  */}
//     <div className='login__div' onSubmit={handleLoginUser}>
//        <div className='logo'><h2>Ibrohim</h2></div>
//        <p className='login__text2'>Login</p>
//        <form>
//           <input className='email' type="email" placeholder='Email' required value={email} onChange={(e) => setEmail(e.target.value)} />
//           <div className="password__wrapper item">
//           <input type={isVisiblePassword ? "text" : "password"} placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
//           {
//             isVisiblePassword ? <FiEye onClick={() => setIsVisiblePassword(false)}/> : <FiEyeOff onClick={() => setIsVisiblePassword(true)}/>
//           }
//         </div>
//           <p className='dont'>Dont you have an account? <Link className='signup__text' to="/auth/signup">Sign up.</Link></p>
//           <button className='login__btn' disabled={loading}>{loading ? "Loading..." : "Login"}</button>
//        </form>
//     </div>
//     </>
//   ) 
// }

// export default Login