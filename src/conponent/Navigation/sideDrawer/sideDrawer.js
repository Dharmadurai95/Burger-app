import React from 'react';

import Logo from '../../logo/logo';
import NavigationItems from '../navigationItems/navigationItems';
import './sideDrawer.css';
import Backdrop from '../../ui/backdrop/backdrop';
import Aux from '../../../hoc/aux';

const sideDrawer = (props) => {
    let attachedClasses = ['SideDrawer', 'Close'];
    if (props.open) {
        attachedClasses = ['SideDrawer', 'Open']
    }
    return (
        <Aux>
            <Backdrop show={props.open}
                clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <div className='Logo'>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
};
export default sideDrawer;