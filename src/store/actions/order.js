import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const  purchaseBurgerSuccess = (id,orderData) => {
    return{
        type:actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId:id,
        orderDate:orderData
    };
};
export const purchaseBurgerFail = (error) => {
    return{
        type:actionTypes.PURCHASE_BURGER_FAIL,
        error:error
    };
};

export const purchaseBurgerStart  = ()=> {
    return{
        type:actionTypes.PURCHASE_BURGER_START
    };
};

export const purchaseBurger = (orderData,token) => {
    return dispatch=> {
        dispatch( purchaseBurgerStart() );
        axios.post('/orders.json?auth',+(orderData,token) )
        .then((response) => {
          dispatch(purchaseBurgerSuccess(response.data.name,orderData))
        })
        .catch((error) => {
            dispatch(purchaseBurgerFail(error))
        });
    }; 
};
export const purchaseInit = ()=> {
    return{
        type:actionTypes.PURCHASE_INIT
    }
}
export const  fetchOrderSuccess = (orders)=> {
    return{
        type:actionTypes.FETCH_ORDER_START,
        orders:orders
    };
};
export const  fetchOrderFaile = (error)=> {
    return{
        type:actionTypes.FETCH_ORDER_FAILED,
        error:error
    };
};
export const  fetchOrderStart = () => {
    return{
        type:actionTypes.FETCH_ORDER_START
    };
};
export const fetchOrders = (token) => {
 
    return dispatch =>{
        dispatch(fetchOrderStart());
        axios.get('/orders.json?auth'+token)
        .then(res=>{
            const fetchOrder = []
            for(let key in res.data) {
                fetchOrder.push({
                    ...res.data[key],
                    id:key
                })
            }
           dispatch(fetchOrderSuccess(fetchOrder))
        })
        .catch(error=>{
            dispatch (fetchOrderFaile(error))
        })
    };
};