import ACTION_TYPES from "../actions/actionTypes"

const initialState={
    isLoading:false,
    error:null,
    basket:[]
}


const basketReducer=(state=initialState,action)=>{
    switch(action.type){
        case ACTION_TYPES.BASKET_LOADİNG:
            return {...state,isLoaidng:true};

            case ACTION_TYPES.BASKET_ERROR:
                return {...state,isLoaidng:false,error:action.payload};

                case ACTION_TYPES.BASKET_SUCCESS:
                    return {...state,İsLoading:false,error:null,basket:action.payload};

                    case ACTION_TYPES.CREATE_ITEM:
                        return {...state,basket:state.basket.concat(action.payload)};

                        case ACTION_TYPES.UPDATE_ITEM:
                         const updatedBasket=   state.basket.map((item)=>item.id===action.payload.id ? action.payload : item)
                         return {...state,basket:updatedBasket};

                         case ACTION_TYPES.REMOVE_ITEM:
                         const filtredBasket=state.basket.filter((item)=>item.id !==action.payload)
                         return {...state,basket:filtredBasket}

                    default:
                        return state;
    }
}
export default basketReducer;