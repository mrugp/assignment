import React, { useState } from "react";
import { TextField, InputAdornment, IconButton } from "@material-ui/core";
//import { Person, Lock } from "@material-ui/icons";
import { useFormik } from "formik";
import * as Yup from "yup";
import SubmitForm from "./SubmitForm";
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux'
import { loginAction } from "../actions/loginAction";
import SignupForm from './Register'
//import axios from "axios";
const SignIn = () => {
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
  const [register,setRegister] = useState(false)
  const dispatch = useDispatch()
  const loginStatus =useSelector(state => state ?
     state.loginReducer ?
      state.loginReducer.data.status:'':'' )//.LoginReducer.status)
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email address is required"),
      password: Yup.string().min(5).required("Password is required"),
    }),

    onSubmit:  (values) => {
      console.log(values);
      dispatch(loginAction())
      
    },
  });

  const callRegister =()=>{
      setRegister(true)
  }

  if(register){
    return(<>
      <SignupForm/>
    </>)
  }
  if(loginStatus == 200){
    return( <SubmitForm />)
  }
  return (
    <div className="container">
      <div className={!isSubmitSuccess ? "signin signin_wrapper" : "signin signin_success"} style={{margin:"100px"}}>
        {isSubmitSuccess ? (
          <SubmitForm />
        ) : (
          <form onSubmit={formik.handleSubmit}>
            <h2>Login Form</h2>
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

            <button type="submit">Login</button>
            <h3> Not a member? <span className="signup" onClick={callRegister}>Signup now</span></h3>
          </form>
        )}
      </div>
    </div>
  );
};

export default SignIn;
