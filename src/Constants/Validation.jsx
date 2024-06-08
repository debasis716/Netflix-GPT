import React from 'react'

function checkValidationData(name,email,password) {
    // const isName = 
    const isEmailValidate = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPasswordValidate =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isEmailValidate) return "Email id not valid";
    if(!isPasswordValidate) return "Password is not valid";
    return null;
}

export default checkValidationData
