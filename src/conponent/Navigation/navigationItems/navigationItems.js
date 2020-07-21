import React from 'react';

import './navigationItems.css';
import NavigationItem from './navigationitem/navigationItem';


 const navigationItems=()=> {
     return(
        <ul className='NavigationItems'>
          <NavigationItem link='/' active>Burger Builder</NavigationItem>
          <NavigationItem link='/orders'>Orders</NavigationItem>
          <NavigationItem link='/auth'>Authenticat</NavigationItem>

        </ul> 
     );
 };
 export default navigationItems;