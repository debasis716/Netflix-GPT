import React, { useRef, useState } from 'react'
import { Link } from "react-router-dom";
import Header from './Header';
import checkValidationData from '../Constants/Validation';

function Login() {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errMessage,setErrMessage]=useState(null);
    const email=useRef(null);
    const password = useRef(null);
    const name = useRef(null);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm)
    };

    const handleButtonClick = ()=>{

       const message= checkValidationData(email.current.value,password.current.value);
        setErrMessage(message);
    }

    return (
        <>
            <Header />
            <div className='absolute'>
                <img class="h-auto max-w-full" src="https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="login-bgimg" />
            </div>
            <form onSubmit={(e)=>e.preventDefault()} className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-70'>
                <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In":"Sign Up"}</h1>
                {!isSignInForm && <input type='text' ref={name} placeholder='Full Name' className='p-4 my-4 w-full bg-gray-500' />}
                <input ref={email} type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-500' />
                
                <input ref={password} type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-500' />
                <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className='text-red-500 font-bold text-lg py-3'>{errMessage}</p>
                <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
                    {isSignInForm ? " New to Netflix ? Sign Up Now" : "Already Register Sign In Now"}
                   </p>
            </form>
        </>
    )
}

export default Login
