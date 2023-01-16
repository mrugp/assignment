const intialState ={
    loading:false,
    token:{},
    error:''
}

export const registerReducer =(store = intialState,action)=>{

    switch(action.type){
        case 'FETCH_REGISTER_Request': return {
            token : {},
            loading:true,
            error:''
        }
        case 'FETCH_REGISTER_SUCCESS': return {
            error:'',
            loading:false,
            token : action.payload
        }
        case 'FETCH_REGISTER_FAILURE': return {
            token:{},
            loading:false,
            error : action.payload
        }
        default: return store
    }

}