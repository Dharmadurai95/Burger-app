import React from 'react';
import './input.css'

const input = (props) => {
    let inputElement = null;

    let inputClass = ['InputElement'];
    if (props.invalid && props.shouldValidate && props.touched) {
        inputClass.push('invalid')
    }
    switch (props.elementType) {
        case ('input'):
            inputElement = <input className={inputClass.join(' ')}
                {...props.elementConfig} value={props.value}
                onChange={props.changed} />;
            break;
        case ('textarea'):
            inputElement = <input className={inputClass.join(' ')}
                {...props.elementConfig} value={props.value}
                onChange={props.changed} />;
            break;
        case ('select'):
            inputElement = (
                <select
                    className={inputClass.join(' ')}
                    onChange={props.changed} >
                    {props.elementConfig.options.map((v, index) =>
                        (<option key={v.value} value={v.value}>
                            {v.displayValue}
                        </option>)
                    )}
                </select>);
            break;
        default:
            inputElement = <input
                onChange={props.changed}
                className={inputClass.join(' ')}
                {...props.elementConfig} />
    }
    console.log(props)
    return (
        <div className='Input'>
            <label className='Label'>{props.label}</label>
            {inputElement}
        </div>
    );
};
export default input;