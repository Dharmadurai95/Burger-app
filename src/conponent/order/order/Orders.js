import React from 'react';
import './Orders.css';

const orders = (props) => {

    const ingredients = [];
    for (let ingredientName in props.ingredients) {
        ingredients.push({
            name: ingredientName,
            amound: props.ingredients[ingredientName]
        })
    };
    console.log(props.ingredients,'ingredients value');

    const ingredientOutput = ingredients.map((value, index) => {
        return(<span className='ordersIngredient'>{value.name}:{value.amound} key={index}</span>)
    })
    return (
        <div className='Order'>
            <p>ingredidnts:{ingredientOutput}</p>
            <p><strong>Price:{Number.parseFloat(props.price).toFixed(2)}</strong></p>
        </div>
    );
};
export default orders;