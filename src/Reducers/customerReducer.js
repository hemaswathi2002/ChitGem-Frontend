const initialState = {
    data : {},
    invoice : [],
    chit : []
}

export const customerReducer = (state = initialState,action)=>{
    switch(action.type){
        case 'GET_ONE_USER':{
            return {...state, data : action.payload}
        } 
        case 'START_GET_INVOICE' : {
            return {...state, invoice : action.payload}
        }
        case 'START_GET_USERS_CHIT': {
            return {...state, chit : action.payload}
        }
        case 'START_UPDATE_INVOICE ': {
            return {...state,invoice : action.payload}
        } 
        default : {
            return {...state}
        }
    }
}