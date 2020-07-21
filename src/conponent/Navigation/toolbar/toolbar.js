import React from 'react';

import './toolbar.css';
import Logo from '../../logo/logo';
import NavigationItems from '../navigationItems/navigationItems';
import DrawerToggle from '../sideDrawer/DrawerToggle/DrawerToggle';


const toolbar = (props) => {
    return (
        <header className='Toolbar'>
            <DrawerToggle clicked={props.drawerToggledClicked}/>
            <div className='logoimg'>
                <Logo />
            </div>
            <nav  className='DesktopOnly'>
                <NavigationItems />
            </nav>
        </header>
    );
};
export default toolbar;