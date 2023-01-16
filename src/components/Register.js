import React, { useState } from 'react';
 import { useFormik } from 'formik';
 import * as Yup from 'yup';
//import { TextField } from '@material-ui/core';
import { TextField, InputAdornment, IconButton } from "@material-ui/core";
import { loginAction } from '../actions/loginAction';
import { useDispatch, useSelector } from 'react-redux'
import { RegisterAction } from '../actions/RegisterAction';
import SignIn from './SignIn';
 const SignupForm = () => {
    const dispatch = useDispatch()

    const [login,setLogin] =useState(false)
   const formik = useFormik({
     initialValues: {
       firstName: '',
       lastName: '',
       email: '',
       password:'',
       confirmpassword:''
     },
     validationSchema: Yup.object({
       firstName: Yup.string().required('First name is required'),
       lastName: Yup.string().required('Last name is required'),
       email: Yup.string().email('Invalid email address').required('Required'),
       password : Yup.string().min(5).required('Password is required'),
       confirmpassword : Yup.string()
       .oneOf([Yup.ref('password'), null], 'Passwords must match')
     
     
     }),
     onSubmit:(values) => {
        console.log(values);
        dispatch(RegisterAction())
        
      },
    
   });

   const callLogin =()=>{
    setLogin(true)
   }
   if(login){
    return(
        <SignIn/>
    )
   }
   return (

<div className="container">
<div className='signin signin_wrapper'>
   
    <form onSubmit={formik.handleSubmit}>
      <h2>Register</h2>
      <TextField
        name="firstName"
        type="text"
        placeholder="First name"
        className="textField"
        InputProps={{
          startAdornment: (
            <InputAdornment>
              <IconButton>
                {/* <Lock /> */}
              </IconButton>
            </InputAdornment>
          ),
        }}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.firstName}
      />
      {formik.touched.firstName && formik.errors.firstName ? (
        <div className="error_msg">{formik.errors.firstName}</div>
      ) : null}

<TextField
        name="lastName"
        type="text"
        placeholder="Last name"
        className="textField"
        InputProps={{
          startAdornment: (
            <InputAdornment>
              <IconButton>
                {/* <Lock /> */}
              </IconButton>
            </InputAdornment>
          ),
        }}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastName}
      />
      {formik.touched.lastName && formik.errors.lastName ? (
        <div className="error_msg">{formik.errors.lastName}</div>
      ) : null}



      <TextField
        name="email"
        type="text"
        placeholder="Email"
        className="textField"
        InputProps={{
          startAdornment: (
            <InputAdornment>
              <IconButton>
               
              </IconButton>
            </InputAdornment>
          ),
        }}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />

      {formik.touched.email && formik.errors.email ? (
        <div className="error_msg">{formik.errors.email}</div>
      ) : null}

<TextField
        name="password"
        type="password"
        placeholder="Password"
        className="textField"
        InputProps={{
          startAdornment: (
            <InputAdornment>
              <IconButton>
                {/* <Lock /> */}
              </IconButton>
            </InputAdornment>
          ),
        }}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
      />
      {formik.touched.password && formik.errors.password ? (
        <div className="error_msg">{formik.errors.password}</div>
      ) : null}


      <TextField
        name="confirmpassword"
        type="password"
        placeholder="ConfirmPassword"
        className="textField"
        InputProps={{
          startAdornment: (
            <InputAdornment>
              <IconButton>
                {/* <Lock /> */}
              </IconButton>
            </InputAdornment>
          ),
        }}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.confirmpassword}
      />
      {formik.touched.confirmpassword && formik.errors.confirmpassword ? (
        <div className="error_msg">{formik.errors.confirmpassword}</div>
      ) : null}

      <button type="submit">Register</button>
      <h3> Already a member <span className="signup" onClick={callLogin}>Login</span></h3>
    </form>

</div>
</div>
   );
 };
 export default SignupForm