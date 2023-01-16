const intialState ={
    loading:false,
    data:[],
    error:''
}

export const loginReducer =(store = intialState,action)=>{

    switch(action.type){
        case 'FETCH_DATA_REQUEST': return {
            data : [],
            loading:true,
            error:''
        }
        case 'FETCH_DATA_SUCCESS': return {
            error:'',
            loading:false,
            data : action.payload
        }
        case 'FETCH_DATA_FAILURE': return {
            data:[],
            loading:false,
            error : action.payload
        }
        default: return store
    }

}