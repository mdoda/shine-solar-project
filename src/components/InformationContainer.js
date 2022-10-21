import React from 'react';
import axios from 'axios';
import './InformationContainer.css';
import Orders from './Orders';
import Users from './Users';

const InformationContainer = () => {
    const [users, setUsers] = React.useState([]);
    const [orders, setOrders] = React.useState([]);
    const [ordersByUserId, setOrdersByUserId] = React.useState([]);

    //gets all users
    const getUsers = () => {
        axios.get('http://localhost:5000/users', { 
            headers: {"Authorization" : `Bearer as33dienWJawEgm!@44SDeuasrl48zdsl!_`
        } }).then(res => {
            console.log(res.data)
            setUsers(res.data);
        })
      };
    
    // gets all orders
    const getOrders = () => {
        axios.get('http://localhost:5000/orders', { 
            headers: {"Authorization" : `Bearer as33dienWJawEgm!@44SDeuasrl48zdsl!_`
        } }).then(res => {
            console.log(res.data)
            setOrders(res.data);
        })
      };

    // gets all orders whose id is 4 which is Jane Doe
    const getOrdersByUserId = () => {
        axios.get('http://localhost:5000/orders/', { 
            headers: {"Authorization" : `Bearer as33dienWJawEgm!@44SDeuasrl48zdsl!_`},
            params: { userId: 4 } 
        }).then(res => {
            setOrdersByUserId(res.data);
        })
      };
    
    return (
     <>
     <p>1.Clicking this button will return all the users in the server</p>
      <Users clickHandler={getUsers} users={users} />

      <p>2.Clicking this button will return all the orders in the server</p>
      <Orders clickHandler={getOrders} orders={orders} />
      
      <p>3.Clicking this button will return all the orders corresponding to Jane Doe</p>
      <Orders clickHandler={getOrdersByUserId} orders={ordersByUserId} />

    </>
    );
  }
  
  export default InformationContainer;