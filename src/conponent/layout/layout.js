import React, { Component } from 'react';
import Aux from '../../hoc/aux'
import '../layout/layout.css';
import Toolbar from '../Navigation/toolbar/toolbar'
import SideDrawer from '../Navigation/sideDrawer/sideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer:true
    }
    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer:false})
    }

    sideDreawerToggleHnadler =()=> {
        this.setState((prevstate)=> {
            return {showSideDrawer:!prevstate.showSideDrawer};
        })
    }
    render() {
        return (
            <Aux>
                <Toolbar drawerToggledClicked={this.sideDreawerToggleHnadler}/>
                <SideDrawer open={this.state.showSideDrawer}
                 closed = {this.sideDrawerClosedHandler}/>
                <main className='Contend'>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;