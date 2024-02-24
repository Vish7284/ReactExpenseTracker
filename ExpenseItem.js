import React, { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card';


function ExpenseItem(props){
    const [title , setTitle] = useState(props.title);
    const [amount ,setAmount] = useState(props.amount);
    const eventHandler =()=>{
        setTitle("Updated")
        console.log(title);
    }

    const eventHandler1 = ()=>{
       setAmount("$100")
    }
   
    return (
        <Card className='expense-item'>
        <div className='expense-item__date'>
           <ExpenseDate date={props.date}/>
            </div>
           <ExpenseDetails title={title} amount ={amount} location ={props.location}/>
           <button onClick={eventHandler}>Delete Expenses</button>
           <button onClick={eventHandler1}>EditExpenses</button>
        </Card>
    )
}

export default ExpenseItem;