import React from 'react';
import { NavLink } from 'react-router-dom'

import './navigationItem.css';

const navigationItem = (props) => {
    return (

        <li className='NavigationItem'>
            <NavLink 
               to ={props.link}>{props.children}</ NavLink> 
        </li>

    );
};
export default navigationItem;