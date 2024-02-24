import './ExpenseForm.css';

function ExpenseForm(){
    const titleChangeHandler =(event)=>{
        console.log(event.target.value);
    }

    const amountChangeHandler=(event)=>{
        console.log(event.target.value);
    }

    const dateChangeHandler =(event)=>{
        console.log(event.target.value);
    }

    const locationChangeHandler =(event) =>{
        console.log(event.target.value);
    }
  return(
    <form>
        
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
            <button type='submit'>Save</button>
        </div>
    </form>
  )
}


export default ExpenseForm;