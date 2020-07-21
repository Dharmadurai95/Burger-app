import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';
import './App.css';
import Layout from './conponent/layout/layout';
import BurgerBuild from './container/burgerBuilder/burgerBuilder'
import CheckOut from './conponent/CheckOut/CheckOut';
import Order from './container/order/order';
import auth from './container/auth/auth'



class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route path='/checkout' component={CheckOut} />
            <Route path='/orders' component={Order} />
            <Route path='/auth' component={auth} />
            <Route path='/' exact component={BurgerBuild} />
            {/* <Redirect from='/checkout-all' to='/' /> */}
          </Switch>
        </Layout>
       {/*  <CheckOut /> */}
  
      </div>
    );
  }
}

export default App;
