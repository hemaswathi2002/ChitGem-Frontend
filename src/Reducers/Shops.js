const initialState = {
    shop: [],
    serverErrors: [],
    shops:{}
};
const shopReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SHOP' : {
            return {...state, shop: action.payload}
        }
        
        case 'ADD_SHOP':{
            return {
                ...state,
                shop: [...state.shop, action.payload]
            }
        }
        case 'UPDATE_SHOP':{
            return {
                ...state,
                shop: state.shop.map(shop => (shop._id === action.payload._id ? action.payload : shop))
            }
        }
        case 'REMOVE_SHOP':{
            return {
                ...state,
                shop: state.shop.filter(shop => shop._id !== action.payload)
            }
        }
        case 'SET_SERVER_ERRORS': {
            return {
                ...state,
                serverErrors: action.payload
            }
        }
          case 'SET_APPROVED_SHOPS': {
            return {
                ...state,
                shops: action.payload
            };
        }
        case 'CLEAR_SERVER_ERRORS': {
            return {
                ...state,
                serverErrors: [] 
            };
        }
        default:
            return state;
    }
};

export default shopReducer;





