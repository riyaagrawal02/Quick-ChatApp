import React, { useContext, useState } from 'react'
import assets from '../assets/assets'
import { AuthContext } from '../../context/AuthContext'

const LoginPage = () => {

  const [currState, setCurrState] = useState("Sign Up")
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [bio, setBio] = useState("")

  const { login } = useContext(AuthContext)

  const onSubmitHandler = (event) => {
    event.preventDefault();

    console.log("FORM SUBMIT", { fullName, email, password, bio });

    if (currState === "Sign Up") {
      login("signup", {
        fullName,
        email,
        password,
        bio
      });
    } else {
      login("login", {
        email,
        password
      });
    }
  }

  return (
    <div className='min-h-screen bg-gray-100 flex items-center justify-center gap-8 sm:justify-evenly max-sm:flex-col'>

      {/* LEFT */}
      <img src={assets.logo_big} alt="logo" className='w-[min(30vw,250px)]'/>

      {/* RIGHT */}
      <form 
        onSubmit={onSubmitHandler} 
        className='border bg-white text-black border-gray-300 p-6 flex flex-col gap-5 rounded-xl shadow-lg w-[300px]'
      >

        <h2 className='font-semibold text-2xl text-center'>
          {currState}
        </h2>

        {/* Full Name (Signup only) */}
        {currState === "Sign Up" && (
          <input
            type="text"
            placeholder='Full Name'
            value={fullName}
            onChange={(e)=>setFullName(e.target.value)}
            className='p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500'
            required
          />
        )}

        {/* Email */}
        <input
          type="email"
          placeholder='Email Address'
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          className='p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500'
          required
        />

        {/* Password */}
        <input
          type="password"
          placeholder='Password'
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          className='p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500'
          required
        />

        {/* Bio (Signup only) */}
        {currState === "Sign Up" && (
          <textarea
            placeholder='Short bio (optional)'
            value={bio}
            onChange={(e)=>setBio(e.target.value)}
            className='p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500'
            rows={3}
          />
        )}

        {/* Button */}
        <button 
          type='submit' 
          className='py-2 bg-gradient-to-r from-purple-500 to-violet-600 text-white rounded-md cursor-pointer hover:opacity-90'
        >
          {currState === "Sign Up" ? "Create Account" : "Login"}
        </button>

        {/* Toggle */}
        <p className='text-sm text-center'>
          {currState === "Sign Up" ? (
            <>
              Already have an account?{" "}
              <span 
                onClick={() => setCurrState("Login")} 
                className='text-violet-600 font-medium cursor-pointer'
              >
                Login here
              </span>
            </>
          ) : (
            <>
              Create an account?{" "}
              <span 
                onClick={() => setCurrState("Sign Up")} 
                className='text-violet-600 font-medium cursor-pointer'
              >
                Sign Up
              </span>
            </>
          )}
        </p>

      </form>
    </div>
  )
}

export default LoginPage