import React,{useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './Expenseitem.css';

const Expenseitem = (props) => {
  const [title,setTitle]= useState(props.title);
    
  
  function clickHandler (){
    console.log('clicked!!!');
   
    console.log(title);
    setTitle('updated');
    console.log(title);
  };
  return (
    <li>
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
    </li>
  );
}

export default Expenseitem;
