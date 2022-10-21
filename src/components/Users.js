import HeaderRow from './HeaderRow';
import ItemRow from './ItemRow';
import Card from './Card';
import './Utils/styles.css';
import React from 'react';
import './InformationContainer.css';

const Users = (props) => {
    const userHeader = ['id','First Name','Last Name','Email'];
    
    return (
     <Card className="list">
        <button onClick={props.clickHandler}>CLICK</button> 
        
        <div className="items-list">
        <HeaderRow header={userHeader} />
        { props.users.map(user =>(
            <ItemRow 
            key={user.id}
            col1 = {user.id}
            col2 = {user.firstName}
            col3 = {user.lastName}
            col4 = {user.email}
            />))}
        </div>
     </Card>);
  }
  
  export default Users;