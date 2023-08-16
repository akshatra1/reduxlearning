
const initialState={
    cardData : []
}
export default function cardItems(initialState.action)
{
   switch(action.type){
    case 'ADD_TO_CART':
        return {
            ...state,
            cartData: action.data
        }
        break;
    case "REMOVE_TO_CART":
        return{

        }
        break;
    default:
        return state
   } 
}