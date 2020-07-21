import React, { Component } from 'react';
import Button from '../../ui/buttom/button';
import { connect } from 'react-redux'
import './ContactData.css';
import axios from '../../../axios-orders';
import Input from '../../ui/input/input';
import * as actions from '../../../store/actions/index';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';

class ContactData extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                validation: {
                    required: true,
                    minLength:5,
                    maxLength:20
                },
                value: '',
                valid: false,
                touch:false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: ' Your email'
                },
                validation: {
                    required: true,
                    minLength:5,
                    maxLength:20
                },
                value: '',
                valid: false,
                touch:false
            },
            Street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: ' Your Street'
                },
                validation: {
                    required: true,
                    minLength:5,
                    maxLength:20
                },
                value: '',
                valid: false,
                touch:false
            },
    
            PostalCode: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        { value: 'fastest', displayValue: 'fastest' },
                        { value: 'cheapest', displayValue: 'cheapest' }
                    ],
                    placeholder: 'enter your postal code'
                },
                validation:{},
                valid:true,
                value: 'fastest'
            }


        },
        formIsValid:false
    }




    orderHandler = (event) => {
        event.preventDefault();

      
        const formData = {};
        for (let formElementIdentifier in this.state.orderForm) {
            formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value
        }

        const order = {
            ingredient: this.props.ings,
            price: this.props.price,
            orderDate: formData
        }
        this.props.onOrderBurger(order,this.props.token)
       
    }
    checkValitity(value,rules) {
    let isValid = false;
    if(!rules) {
        return true;
    }

    if(rules.required) {
        isValid = value.trim() !== '';
    }
    if(rules.minLength){
        isValid = value.length >= rules.minLength && isValid;
    }
    if(rules.maxLength){
        isValid = value.length <= rules.maxLength && isValid;
    }
    return isValid;

    }

    inputChangedHandler = (event, inputIdentifier) => {

        const updateOrderForm = {
            ...this.state.orderForm
        }
        const updateOrderFormElement = {
            ...updateOrderForm[inputIdentifier]
        }
         updateOrderFormElement.value = event.target.value;
         updateOrderFormElement.valid= this.checkValitity(updateOrderFormElement.value,updateOrderFormElement.validation)
         updateOrderFormElement.touch = true
         updateOrderForm[inputIdentifier] = updateOrderFormElement;

        let  formIsValid = true;
        for(let inputIdentifier in updateOrderForm) {
            formIsValid = updateOrderForm[inputIdentifier].valid && formIsValid
        }

        this.setState({ orderForm: updateOrderForm, formIsValid:formIsValid})
        
    }
    render() {

        const formElementArray = [];
        for (let key in this.state.orderForm) {
            formElementArray.push({
                id: key,
                config: this.state.orderForm[key]
            });
        }

        let form = (
            <form>

                {formElementArray.map((value, index) => {
                    return (<Input
                        key={value.id}
                        elementType={value.config.elementType}
                        elementConfig={value.config.elementConfig}
                        value={value.config.value}
                        invalid={!value.config.valid}
                        shouldValidate={value.config.validation}
                        touched = {value.config.touch}
                        changed={(event) => this.inputChangedHandler(event, value.id)}
                    />);
                })}
                <Button btntype='Success' disabled={!this.state.formIsValid} clicked={this.orderHandler}>ORDER</Button>
            </form>
        )

        return (
            <div className='ContactData'>
                <h1>enter your cotact details </h1>
                {form}
            </div>
        );
    }
};
const mapStateToProps = state => {
    return{
        ings:state.burgerBuilder.ingredients,
        price:state.burgerBuilder.totalPrice,
        loading:state.order.loading,
        token:state.auth.token

    };
};

const mapDispatchToProps = dispatch => {
    return{
        onOrderBurger:(orderDate,token)=> dispatch(actions.purchaseBurger(orderDate,token))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(ContactData,axios));