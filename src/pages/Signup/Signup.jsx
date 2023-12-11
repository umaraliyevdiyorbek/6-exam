import React from "react";
import "./Signup.css";
import { useState } from "react";
import medium from "../../images/medium.svg";
import { Link } from "react-router-dom";
import { instance } from "../../api";
import {toast} from "react-toastify";
import {FiEye,FiEyeOff} from "react-icons/fi"
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const navigate = useNavigate();
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const [Firstname, setFirstname] = useState("");
  const [Lastname, setLastname] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);



  const handlePasswordToggle= async (e) => {
    e.preventDefault();
    setLoading(true)
    // setIsVisiblePassword(true)
    instance.post("/api/auth/signup",{
      "firstname":Firstname,
      "lastname":Lastname,
      "email":Email,
      "password":Password
    })
    .then(response=>{
      if(response.status ===201){
        toast.success("Successfully created account")
        navigate("/login")
      }
    })
    .catch(error =>
      {
        toast.error("Unsuccessfully attempt")
        console.log(error)
      })
      .finally(
        setLoading(false),
        setFirstname(""),
        setLastname(""),
        setEmail(""),
        setPassword("")

      )
  }
  return(
    <>
    { loading ? <h2>Loading...</h2>:
      <div className="signup-card">
      <img className="signup-img" src={medium} alt="" />
      <p className="signup-title">Sign Up</p>
      <form onSubmit={handlePasswordToggle}>
      <input className="sign-first-inp" required value={Firstname} type="text" onChange={(e)=>setFirstname(e.target.value)}  placeholder="Firstname"/>
      <input className="sign-last-inp" required value={Lastname} type="text" onChange={(e)=>setLastname(e.target.value)}  placeholder="Lastname"/>
      <input className="sign-email" required value={Email} type="email" onChange={(e)=>setEmail(e.target.value)}  placeholder="Email"/>
      <div className="sign-div">
        <input className="sign-pass" type="{isVisiblePassword ? 'text ': 'password'}" required value={Password}  placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
        {
             isVisiblePassword ? <FiEyeOff onClick={() => setIsVisiblePassword(false)}/> : <FiEye  onClick={() => setIsVisiblePassword(true)}  />
         }
      </div>
      <p>Don't you have an account? <Link className="login__text" to="/auth/login">Login.</Link></p>
      <button type="submit" className="signup-btn">{loading ? "Loading..." : "Sign up"}</button>
      </form>
    </div> }
    </>
  )

};

export default Signup;

// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
// import {FiEye , FiEyeOff} from 'react-icons/fi'
// import { instance } from '../../api'
// import {toast} from "react-toastify"
// import { useNavigate } from 'react-router-dom'
//   import 'react-toastify/dist/ReactToastify.css';

// const Signup = () => {
//   const navigate = useNavigate()
//   const [isVisiblePassword, setIsVisiblePassword] = useState(false)
//   const [Firstname , setFirstname] = useState("")
//   const [Lastname , setLastname] = useState("")
//   const [Email , setEmail] = useState("")
//   const [Password , setPassword] = useState("")
//   const [loading , setLoading] = useState(false)

//   const handleCreateUser = async (e) => {
//     e.preventDefault();
//      setLoading(true)
//     instance.post( /api/auth/signup, {
//       "firstname": Firstname,
//       "lastname" : Lastname,
//       "email": Email,
//       "password": Password
//     })
//     .then(response => {
//       if(response.status === 201){
//         toast.success("You registered successfully")
//         navigate("/auth/login")
//       }
//     })
//     .catch(error =>
//       {
//         toast.error("You registered unsuccessfully")
//         console.log(error);
//       })
//     .finally(
//       setLoading(false),
//       setFirstname(""),
//       setLastname(""),
//       setEmail(""),
//       setPassword("")
//     )

//   }

//   return (
//     <>
//     {loading ? <h1>Loading</h1> :
//       <div className="sign__up" >
//         <div className="logo__sign-up"><h2>Ibrohim</h2></div>
//         <p className="sign__up-text">Sign up</p>
//         <form className="sign__up-form" onSubmit={handleCreateUser}>
//           <input type="text" placeholder='Firstname' required value={Firstname} onChange={(e) => setFirstname(e.target.value)} />
//           <input type="text" placeholder="Lastname" required value={Lastname} onChange={(e) => setLastname(e.target.value)}/>
//           <input type="email" placeholder="Email" required value={Email} onChange={(e) => setEmail(e.target.value)}/>
//           <div className="password__wrapper">
//             <input type={isVisiblePassword ? "text" : "password"} placeholder="Password" required value={Password} onChange={(e) => setPassword(e.target.value)} />
//             {
//               isVisiblePassword ? <FiEye onClick={() => setIsVisiblePassword(false)}/> : <FiEyeOff onClick={() => setIsVisiblePassword(true)}/>
//             }
//           </div>
//           <p>Don't you have an account? <Link className="login__text" to="/auth/login">Login.</Link></p>
//           <button type="submit" className="sign__up-btn">{loading ? "Loading..." : "Sign up"}</button>
//         </form>
//       </div>}
//     </>
//   )
// }

// export default Signup;
  
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