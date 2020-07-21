import React, { Component } from 'react';
import{ connect } from 'react-redux'
import Aux from '../../hoc/aux';
import Burger from '../../conponent/Buger/Burger';
import BuildControls from '../../conponent/Buger/BuildControls/BuildControls';
import Modal from '../../conponent/ui/modal/modal';
import Ordersummary from '../../conponent/Buger/Ordersummary/ordersummary';
import axios from '../../axios-orders';
import Spinner from '../../conponent/ui/spiner/spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index'




class burgerBuilder extends Component {
  state = {
    purchasable: false,
    purchasing: false,
    loading: false

  }
  componentDidMount() {
    console.log(this.props)
    this.props.onInitIngredients();
   
  }
  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map((igkey) => {
        return ingredients[igkey]
      })
      .reduce((sum, el) => {
        return sum + el
      }, 0);
    return sum > 0;
  }

  // AddIngredientHandler = (type) => {
  //   const oldcount = this.state.ingredients[type];
  //   const updatedCount = oldcount + 1;
  //   const updatedIngredient = { ...this.state.ingredients };
  //   updatedIngredient[type] = updatedCount;

  //   const priceAddition = INGREDIENT_PRICE[type];
  //   const oldPrice = this.state.totalPrice;
  //   const newPrice = oldPrice + priceAddition;
  //   this.updatePurchaseState(updatedIngredient);
  //   this.setState({ ingredients: updatedIngredient, totalPrice: newPrice });
  // }

  // removeIngredinetHandler = (type) => {

  //   const oldcount = this.state.ingredients[type];
  //   if (oldcount <= 0) {
  //     return;
  //   }
  //   const updatedCount = oldcount - 1;
  //   const updatedIngredient = {
  //     ...this.state.ingredients
  //   };
  //   updatedIngredient[type] = updatedCount;

  //   const priceDeduction = INGREDIENT_PRICE[type];
  //   const oldPrice = this.state.totalPrice;
  //   const newPrice = oldPrice - priceDeduction;
  //   this.updatePurchaseState(updatedIngredient)
  //   this.setState({ ingredients: updatedIngredient, totalPrice: newPrice })

  // }
  purchaseHandler = () => {
    this.setState({ purchasing: true })
  };
  purchaseCancelHandler = () => {
    this.setState({ purchasing: false })
   
  }

  purchasContinueHandler = () => {
   this.props.onInitPurchase()
    this.props.history.push('/checkout');
  }


  render() {

    const disabledInfo = {
      ...this.props.ings
    };
    for (var key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    //above method is {salad:true,meat:false}
    let orderSummary = null;
    let burger = <Spinner />;
    if (this.props.ings) {
      burger = (
        <Aux>
          <Burger ingredients={this.props.ings} />
          <BuildControls
            IngredientAdded={this.props.onIngredientAdded}
            ingredientRemoved={this.props.onIngredientRemoved}
            disabled={disabledInfo}
            price={this.props.price}
            purchasable={this.updatePurchaseState(this.props.ings)}
            ordered={this.purchaseHandler}
          />
        </Aux>
      );
      orderSummary = <Ordersummary
        ingredients={this.props.ings}
        purchaseCanceled={this.purchaseCancelHandler}
        purchaseContinue={this.purchasContinueHandler} />

    }

    if (this.state.loading) {
      orderSummary = <Spinner />
    }
    return (
      <Aux>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
          {orderSummary}
        </Modal>
        {burger}
      </Aux>
    );
  }
}
const mapStateToProps = state => {
  return{
    ings:state.burgerBuilder.ingredients,
    price:state.burgerBuilder.totalPrice,
    error:state.burgerBuilder.error
  }
}
const mapDispatchToProps = dispatch => {
 return{
   onIngredientAdded:(igName)=> dispatch( actions.addIngredient(igName)),
   onIngredientRemoved :(igName)=> dispatch( actions.removeIngredient(igName)),
   onInitIngredients:()=> dispatch(actions.initIngredient()),
   onInitPurchase: ()=>dispatch(actions.purchaseInit())
 }
}
export default connect(mapStateToProps,mapDispatchToProps) (withErrorHandler(burgerBuilder, axios));