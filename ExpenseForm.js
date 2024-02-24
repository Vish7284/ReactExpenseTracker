import React ,{ useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm(){
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
        const ExpenseData ={
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate),
            location:enteredLocation
        }
        console.log(ExpenseData);
        //Just trying to empty the input box but failed
        // enteredTitle.event.target.value='';
        // enteredAmount.event.target.value='';
        // enteredDate.event.target.value='';
        // enteredLocation.event.target.value='';
    }
  return(
    <form  onSubmit={submitHandler}>
        
        <div className='new-expense__control'>
            <label for="title">Expense Title:</label>
            <input type="text" id="title"  onChange={titleChangeHandler}></input>
        </div>
        <div className='new-expense__control'>
            <label for="amount">Expense Amount:</label>
            <input type="number" id="amount" min="0.01" onChange={amountChangeHandler}></input>
        </div>
        <div className='new-expense__control'>
            <label for="date">Expense Date:</label>
            <input type="date" id="date" min="2023-01-01" max="2025-12-31" onChange={dateChangeHandler}></input>
        </div>
        <div className='new-expense__control'>
            <label for="location">Expense Location:</label>
            <input type="text" id="location" onChange={locationChangeHandler}></input>
        </div>
        <div className='new-expense__actions'>
            <button type='submit'>Add Expense</button>
        </div>
    </form>
  )
}


export default ExpenseForm;