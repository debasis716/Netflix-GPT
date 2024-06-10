import React, { useRef, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import Header from './Header';
import checkValidationData from '../Constants/Validation';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../Utility/firebase";
import { useDispatch } from 'react-redux';
import { addUser } from '../Utility/userSlice';

function Login() {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errMessage, setErrMessage] = useState(null);
    // const navigate=useNavigate();
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);
    const dispatch=useDispatch();
    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm)
    };

    const handleButtonClick = () => {
        const message = checkValidationData(email.current.value, password.current.value);
        setErrMessage(message);
        if (message) return;

        if (!isSignInForm) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value, 
                        photoURL: "https://example.com/jane-q-user/profile.jpg"
                    }).then(() => {
                        const { uid, email, displayName, photoURL } = auth.currentUser;
                        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
                    }).catch((error) => {
                        // An error occurred
                        // ...
                    });
                    // navigate("/browse");
                    // console.log(user);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrMessage(errorCode+"-"+errMessage);
                });

        }
        else {
            // Sign In Logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    alert("Login Successfully!");
                    // navigate("/browse");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrMessage(errorCode);
                });
        }

    }

    return (
        <>
            <Header />
            <div className='absolute'>
                <img className="h-auto max-w-full" src="https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="login-bgimg" />
            </div>
            <form onSubmit={(e) => e.preventDefault()} className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-70'>
                <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
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
