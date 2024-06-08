import React from 'react'

function Header() {
    return (
        <>
            <div className="absolute px-8 py-2 bg-gradient-to-b form-black z-10">
                {/* <div className=' fixed hidden md:flex bg-gradient-to-b w-screen flex-col md:flex-row justify-between from-black px-8 py-2 z-50'>
                    <div > */}
                        <img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="netflix" className='w-44 hidden md:block md:mx-0' />
                    {/* </div>
                </div> */}
            </div>
        </>
    )
}

export default Header
