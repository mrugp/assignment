import axios from "axios"
const fetchLoginSuccess =(data)=>{
    return {
        type :'FETCH_DATA_SUCCESS',
        payload:data
       
    }
}

const fetchLoginFailure =(error)=>{
    return{
        type :'FETCH_DATA_FAILURE',
        payload:error
    }
}

const fetchLoginRequest =()=>{
    return{
        type :'FETCH_DATA_REQUEST',
       
    }
}



export const loginAction =()=>{
    return (dispatch)=>{
    dispatch(fetchLoginRequest);

    axios.get('https://reqres.in/api/login') .
     then(response =>{
        const users = response
        dispatch(fetchLoginSuccess(users))
     })
     .catch( error =>{
         const message =error.message
         dispatch(fetchLoginFailure(message))
     })
    }
}