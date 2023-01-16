import axios from "axios"
const fetchRegisterSuccess =(data)=>{
    return {
        type :'FETCH_REGISTER_SUCCESS',
        payload:data
       
    }
}

const fetchRegisterFailure =(error)=>{
    return{
        type :'FETCH_REGISTER_FAILURE',
        payload:error
    }
}

const fetchRegisterRequest =()=>{
    return{
        type :'FETCH_REGISTER_Request',
       
    }
}



export const RegisterAction =()=>{
    return (dispatch)=>{
    dispatch(fetchRegisterRequest);

    axios.get('https://reqres.in/api/register') .
     then(response =>{
        const users = response.data
        dispatch(fetchRegisterSuccess(users))
     })
     .catch( error =>{
         const message =error.message
         dispatch(fetchRegisterFailure(message))
     })
    }
}