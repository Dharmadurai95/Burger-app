import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const addIngredient = (name) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: name
    };
};
export const removeIngredient = (name) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingrefdientName:name
    };
};




export const setIngridients = (ingredients) => {
    return {
        type: actionTypes.SET_INGREDIENT,
        ingredients: ingredients
    };
};
export const fetchIngredintsFailed = () => {
    return {
        type: actionTypes.FETCH_INGREDIENT_FAILED
    };
};

export const initIngredient = () => {
    return dispatch => {
        axios.get('https://my-burger-app-2a495.firebaseio.com/ingredients.json')
            .then(response => {
                dispatch(setIngridients(response.data));
            })
            .catch(error=> {
                dispatch(fetchIngredintsFailed());
            });
    };
};