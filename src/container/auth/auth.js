import React, { Component } from 'react';
import { connect } from 'react-redux'
import Input from '../../conponent/ui/input/input';
import Button from '../../conponent/ui/buttom/button';
import './auth.css';
import * as actions from '../../store/actions/index'
import Spinner from '../../conponent/ui/spiner/spinner';


class Auth extends Component {

    state = {
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your mail'
                },
                validation: {
                    required: true,
                    isEmail: true
                },
                value: '',
                valid: false,
                touch: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Your password'
                },
                validation: {
                    required: true,
                    minLenth: 6
                },
                value: '',
                valid: false,
                touch: false
            }
           
        },
        isSignup:true
    }

    checkValitity(value, rules) {
        let isValid = false;
        if (!rules) {
            return true;
        }

        if (rules.required) {
            isValid = value.trim() !== '';
        }
        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }
        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid;
        }
        return isValid;

    }
    inputChangedHandler = (event, controlName) => {
        const updateControls = {
            ...this.state.controls,
            [controlName]: {
                ...this.state.controls[controlName],
                value: event.target.value,
                valid: this.checkValitity(event.target.value, this.state.controls[controlName].validation),
                touch: true
            }
        };
        this.setState({ controls: updateControls })
    }
    submitHandler = (event) => {
        event.preventDefault();
        this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value,this.state.isSignup)

    }
    switchAuthModeHandler = () => {
        this.setState(prevState => {
            return { isSignup: !prevState.isSignup }
        })
    }
    render() {
        const formElementArray = [];
        for (let key in this.state.controls) {
            formElementArray.push({
                id: key,
                config: this.state.controls[key]
            });
        }

        let form = (
            formElementArray.map((value, index) => {
                return (<Input
                    key={value.id}
                    elementType={value.config.elementType}
                    elementConfig={value.config.elementConfig}
                    value={value.config.value}
                    invalid={!value.config.valid}
                    shouldValidate={value.config.validation}
                    touched={value.config.touch}
                    changed={(event) => this.inputChangedHandler(event, value.id)}
                />);
            })
        )

        if(this.props.loading){
            form = <Spinner />
        }

        return (
            <div className='auth'>
                <form onSubmit={this.submitHandler}>
                    {form}
                    <Button btntype='Success'>submit</Button>
                    <Button clicked={this.switchAuthModeHandler} btntype='Danger'>SWITCHEDIN{this.state.isSignup ? 'SingIn' :"Sign Up"}</Button>
                </form>
            </div>

        );
    }
};

const mapStateToProps = state => {
    return {
        loading:state.auth.loading,
        error:state.Auth.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password,isSignup) => dispatch(actions.auth(email, password,isSignup))
    }
}
export default connect(null, mapDispatchToProps)(Auth);