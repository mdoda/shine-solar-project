import React from 'react';
import Card from './Card';
import './Utils/styles.css';



const ItemRow =  props =>{

    return (
    <div>
    <Card className="items-row">
        <div>{props.col1}</div>
        <div>{props.col2}</div>
        <div>{props.col3}</div>
        <div>{props.col4}</div>
    </Card>
    </div>
 
    );
}

export default ItemRow;