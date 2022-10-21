import React from 'react';
import HeaderRow from './HeaderRow';
import ItemRow from './ItemRow';
import Card from './Card';
import './Utils/styles.css';
import './InformationContainer.css';

const Orders = (props) => {
    const orderHeader = ['Price','Product','Status','User Id'];

    return (
     <Card className="list">
        <button onClick={props.clickHandler}>CLICK</button>
        
        <div className="items-list">
        <HeaderRow header={orderHeader} />
        { props.orders.map(order =>(
            <ItemRow 
            col1 = {order.price}
            col2 = {order.product}
            col3 = {order.status}
            col4 = {order.userId}
            />))}
        </div>
     </Card>);
  }
  
  export default Orders;