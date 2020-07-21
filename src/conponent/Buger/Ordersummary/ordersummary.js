import React, { Component } from 'react';
import Aux from '../../../hoc/aux';

import Button from '../../ui/buttom/button'

class Ordersummary extends Component {

    componentDidUpdate() {
        console.log('[Ordersummary] componenet will updated');
    }
    render() {

        const ingredientSummary = Object.keys(this.props.ingredients)
            .map((igky) => {
                return <li key={igky} >{igky}:{this.props.ingredients[igky]}</li>
            });

        return (
            <Aux>
                <h3>Your order</h3>
                <p> your delicious order with the following ingredients</p>
                <ul>{ingredientSummary}</ul>
                <Button btntype='Success' clicked={this.props.purchaseCanceled}>Cancel</Button>
                <Button btntype='Danger' clicked={this.props.purchaseContinue}>Continue</Button>
            </Aux>
        );
    }
} 
export default Ordersummary;