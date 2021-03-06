import * as actionTypes from '../actions/actionTypes';

const initialState = {
    ingredients: null,
    totalPrice: 4,
    error:false
}
const INGREDIENT_PRICE = {
    salad: 0.5,
    bacon: 0.4,
    cheese: 0.7,
    meat: 1.3
  
  }

const reducer = (state = initialState,action)=> {
   switch(action.type){
       case actionTypes.ADD_INGREDIENT:
       return{
        ...state,
        ingredients:{
            ...state.ingredients,
            [action.ingredientName] :state.ingredients[action.ingredientName] +1,
        },
        totalPrice:state.totalPrice + INGREDIENT_PRICE[action.ingredientName] 
       }
       case actionTypes.REMOVE_INGREDIENT:
            return{
                ...state,
                ingredients:{
                    ...state.ingredients,
                    [action.ingredientName] :state.ingredients[action.ingredientName]-1,
                    totalPrice:state.totalPrice - INGREDIENT_PRICE[action.ingredientName]
                }
               }
        case actionTypes.SET_INGREDIENT:
            return {
                ...state,
                ingredients: action.ingredients,/* {
                    salad:action.ingredients.salad,
                    bacon:action.ingrdients.bacan,
                    cheese:action.ingrdients.bacon,
                    meat:action.ingredients.meat
                }, */
                totalPrice:4,
                error:false
            }
            case actionTypes.FETCH_INGREDIENT_FAILED:
                return{
                    ...state,
                    error:true
                }
        default:
              return state;
   }
 
};

export default reducer;