import './Utils/styles.css';
import Card from './Card';
import React from 'react';

const HeaderRow =  props =>{

    return (
    <div>
    <Card className="items-row">
        <div>{props.header[0]}</div>
        <div>{props.header[1]}</div>
        <div>{props.header[2]}</div>
        <div>{props.header[3]}</div>
    </Card>
    </div>
 
    );
}

export default HeaderRow;