import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../udillity'



const initialState = {
    orders: [],
    loading: false,
    purchased: false
}

// const purchaseBurgerSuccess = (state, action) => {
//     return updateObject(state, { loading: false })
// }

// const purchaseBurgerFail = (state,action)=> {
//     return updateObject(state,{loading:false})
// }

// const purchaseBurgerSuccess = ( state, action ) => {
//     const newOrder = updateObject( action.orderData, { id: action.orderId } );
//     return updateObject( state, {
//         loading: false,
//         purchased: true,
//         orders: state.orders.concat( newOrder )
//     } );
// };


const reducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.PURCHASE_INIT:
            return {
                ...state,
                purchased: false
            }

        case actionTypes.PURCHASE_BURGER_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.PURCHASE_BURGER_SUCCESS:
           // return purchaseBurgerSuccess( state, action )
            const newOrder = {
                ...action.orderDate,
                id: action.orderId
            }
            return {
                ...state,
                loading: false,
                orders: state.orders.concat(newOrder),
                purchased: true
            };
        case actionTypes.PURCHASE_BURGER_FAIL:
            //return purchaseBurgerFail(state,action);
            return {
                ...state,
                loading: false
            };
        case actionTypes.FETCH_ORDER_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.FETCH_ORDER_SUCCESS:
            return {
                ...state,
                orders: action.orders,
                loading:false
            }
        case actionTypes.FETCH_INGREDIENT_FAILED:
            return{
                ...state,
                loading:false
            }
        default:
            return state;
    };
};
export default reducer;
