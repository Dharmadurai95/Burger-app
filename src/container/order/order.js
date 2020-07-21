import React, { Component } from 'react';
import { connect } from 'react-redux';
import Orders from '../../conponent/order/order/Orders'
import axios from '../../axios-orders'
import * as  actions from '../../store/actions/index';
import Spinner from '../../conponent/ui/spiner/spinner';

class Order extends Component {
    // state ={
    //     orders:[],
    //     loading:true
    // }

    componentDidMount(){
        this.props.onFetchOrders(this.props.token)
        console.log(this.props.orders,'whats goin on',this.props.loading)
        // axios.get('/orders.json')
        // .then(res=>{
        //     const fetchOrders = []
        //     for(let key in res.data) {
        //         fetchOrders.push({
        //             ...res.data[key],
        //             id:key
        //         })

        //     }
        //     this.setState({loading:false,orders:fetchOrders})
        //     console.log(fetchOrders,'fetch date record');
        // })
        // .catch(error=>{
        //     this.setState({loading:false})
        // })
    }
    
    render() {
    //   let orders = <Spinner />;
    //   if(this.props.loading === false) {
    //     orders = (
          
    //       )
    //   }
        return (
            <div>
                {this.props.orders.map((value,index)=> {
                return(
                    <Orders ingredients={value.ingredient} key={value.id} price={value.price} />
                );
                
            })}
            </div>

        );
    }
};
const mapStateToProps = state => {
    return{
        orders:state.order.orders,
        loading:state.order.loading,
        token:state.auth.token
    }
}
const mapDispatchToProps = dispatch => {
    return{
        onFetchOrders:(token)=> dispatch(actions.fetchOrders(token))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Order);