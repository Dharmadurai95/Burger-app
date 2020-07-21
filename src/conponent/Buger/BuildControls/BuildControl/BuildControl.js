import React from 'react';
import './BuildControl.css';

const BuildControl = (props) => {
    return (
        <div className='buildControl'>
            <div className='label'>{props.label}</div>
            <button className='more' 
            onClick={props.added}>More
            </button>
            <button className='less' 
            onClick={props.removed}
            disabled={props.disabled}>Less</button>
        </div>
    );
};
export default BuildControl;