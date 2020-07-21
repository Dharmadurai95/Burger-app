import React from 'react';
import './button.css';

const button = (props) => {
    return (<button
        disabled={props.disabled}
        onClick={props.clicked}
        className={['Button', [props.btntype]].join(' ')}>
        {props.children}
    </button>
    )
}
export default button;