import React ,{ useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm(props){
    const [enteredTitle , setenteredTitle] = useState('');
    const [enteredAmount , setenteredAmount] = useState('');
    const [enteredDate , setenteredDate] = useState('');
    const [enteredLocation , setenteredLocation] = useState('');
    // const [userInput , setUserInput] = useState({
    //     enteredTitle:'',
    //     enteredAmount : '',
    //     enteredDate:'',
    //     enteredLocation:''
    // })
    const titleChangeHandler =(event)=>{
         setenteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput ,
        //     enteredTitle :event.target.value});
        //Handling  using the prevstate as react ensures that th evalues did nt get lost; 
        // setUserInput((prevState)=>{
        //     return {...prevState,enteredTitle:event.target.value}
        // })
    }

    const amountChangeHandler=(event)=>{
          setenteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput ,
        //     enteredAmount:event.target.value});
    }

    const dateChangeHandler =(event)=>{
         setenteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate:event.target.value});
    }

    const locationChangeHandler =(event) =>{
         setenteredLocation(event.target.value);
        // setUserInput({
        //     ...userInput ,
        //     enteredLocation :event.target.value});
    }
    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData ={
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate),
            location:enteredLocation
        }
        props.onSaveExpenseData(expenseData);
        
         setenteredTitle('')
         setenteredAmount('')
         setenteredDate('')
         setenteredLocation('')
    }
  return(
    <form  onSubmit={submitHandler}>
        
        <div className='new-expense__control'>
            <label htmlFor="title">Expense Title:</label>
            <input type="text" id="title" value={enteredTitle} onChange={titleChangeHandler}></input>
        </div>
        <div className='new-expense__control'>
            <label htmlFor="amount">Expense Amount:</label>
            <input type="number" id="amount" value={enteredAmount} min="0.01" onChange={amountChangeHandler}></input>
        </div>
        <div className='new-expense__control'>
            <label htmlFor="date">Expense Date:</label>
            <input type="date" id="date" value={enteredDate} min="2021-01-01" max="2025-12-31" onChange={dateChangeHandler}></input>
        </div>
        <div className='new-expense__control'>
            <label htmlFor="location">Expense Location:</label>
            <input type="text" id="location" value={enteredLocation} onChange={locationChangeHandler}></input>
        </div>
        <div className='new-expense__actions'>
             <button type='button' onClick={props.onCancel}>Cancel</button>
            <button type='submit'>Add Expense</button>
            
        </div>
    </form>
  )
}


export default ExpenseForm;