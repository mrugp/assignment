import React from 'react'
//import { Fade } from 'react-awesome-reveal';

const SubmitForm = () => {
    const myStyle = {
        top:"50%",
        left:"50%",
        position:"absolute",
        transform:"translate(-50%, -50%)",
        textAlign:"center",
        color: 'teal',
        fontSize: "25px",
        fontWeight: "bold",
        textShadow: "3px 3px 3px #000",
        

    }
    return (
       
            <div style={myStyle}>
            <h1> Welcome! </h1>
            <p> You are Logged In </p>
            </div>
        
    )
}

export default SubmitForm
