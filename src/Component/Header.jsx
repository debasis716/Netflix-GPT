import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Utility/firebase";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../Utility/userSlice';
import { Logo } from '../Utility/contant';
function Header() {
    const nagivate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(store => store.user);
    const handleSingout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            // nagivate("/");
        }).catch((error) => {
            // nagivate("/error");
        });
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
                nagivate("/browse");
            } else {
                // User is signed out
                dispatch(removeUser());
                nagivate("/");
            }
        });
        return () => unsubscribe();
    }, []);

    return (
        <>
            {/* <div className="absolute w-screen px-8 py-2 bg-gradient-to-b form-black z-10"> */}
            <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>

                <img src={Logo} alt="netflix" className='w-44' />
                {user &&
                    (
                        <div className='flex'>
                            {/* <img src={user?.photoURL}></img> */}
                            {/* <img src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?t=st=1717877681~exp=1717878281~hmac=c71b7820eda71576e0bb8e5a6e435bbe3465d4a11d605a7607396bfcbfeed872"></img> */}
                        {/* <button type="button" className="h-10 px-5 m-2 text-red-100 transition-colors duration-150 bg-red-700 rounded-lg focus:shadow-outline hover:bg-red-800" onClick={handleSingout}>
                            <svg class="w-4 h-4 ml-3 fill-current" viewBox="0 0 20 20"><path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
                            Sign Out</button> */}

                        <button class="inline-flex items-center h-10 px-5 text-indigo-100 transition-colors duration-150 bg-transparent rounded-lg focus:shadow-outline hover:bg-red-800" onClick={handleSingout}>
                            <span>Sign Out</span>
                            <i class="chevron-right"></i>
                            <svg class="w-4 h-4 ml-3 fill-current" viewBox="0 0 20 20"><path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
                        </button>
                        </div>
                    )}
            </div>
            {/* </div> */}

        </>
    )
}

export default Header
