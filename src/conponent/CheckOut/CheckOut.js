import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import CheckOutSummary from '../order/order/CheckoutSummary/CheckOutSummary'
import ContactData from './ContactData/ContactData'



class CheckOut extends Component {
  /*   state = {
        ingredients:null,
        price:0
       
    } */
    
     /*   componentDidMount() {
      

     const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        for (let param of query.entries()) {
            // ['salad', '1']
            ingredients[param[0]] = +param[1];
        }
        this.setState({ingredients: ingredients}); 
    } */
   

/*     componentWillMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
         let price = 0;
        for (let param of query.entries()) {
            if(param[0] === 'price') {
                price = param[1]
            } else {
                ingredients[param[0]] = +param[1]
            }
        };
        //console.log(ingredients)
        this.setState({ ingredients: ingredients,totalprice:price })
    } */
    checkOutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkOutCondinueHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }
    

    render() {
        let summary = <Redirect to='/' />
        if(this.props.ings) {
            const purchasedRedirect = this.props.purchased ? <Redirect to='/' /> :null;
            summary = (
                <div>
                    {purchasedRedirect}
                
                <CheckOutSummary
                    ingredients={this.props.ings}
                    checkoutCancelled={this.checkOutCancelledHandler}
                    checkoutContinued={this.checkOutCondinueHandler} />
                <Route path={this.props.match.path + '/contact-data'}
                   component={ ContactData } />
            </div>
            )
        }
        return summary;
    }
};
const mapStateToProps = state => {
    return{
        ings:state.burgerBuilder.ingredients,
         purchased:state.order.purchased
    };
};

export default connect(mapStateToProps) (CheckOut);