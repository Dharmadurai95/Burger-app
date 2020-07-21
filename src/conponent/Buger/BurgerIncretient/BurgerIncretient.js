import React,{Component} from 'react';
import './BurgerIncretient.css';
import PropTypes from 'prop-types';

class BurgerIncredient extends Component {
    render(){
        let incredient = null;

        switch(this.props.type) {
            case('breate-bottom'):
                incredient= <div className='BreadBottom'></div>;
            break;
            case('breate-top'):
                incredient = <div className='BreadTop'>
                            <div className='Seeds1'></div>
                            <div className='Seeds2'></div>
                        </div>
            break;
            case('cheese'):
                incredient =<div className='Cheese'></div>;
            break;
            case('meat'):
                incredient =<div className='Meat'></div>;
            break;
            case('bacon'):
               incredient =<div className='Bacon'></div>;
            break;
            case('salad'):
                incredient =<div className='Salad'></div>;
            break;
            default:
                incredient = null;
            
        }

        return  incredient;
            

    }
}
BurgerIncredient.propTypes ={
    type:PropTypes.string.isRequired
}
export default BurgerIncredient;