import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';




const NewExpense = (props)=>{
  const[isEditing , setIsEditing] = useState(false)

  const saveDataHandler=(enteredExpenseData)=>{
   const expenseData = {
    ...enteredExpenseData,
    id:Math.random().toString()
   }
    props.onAddExpense(expenseData);
    setIsEditing(false)
  }

  const startEditingHandler = () =>{
        setIsEditing(true)
  }
   const endEditingHandler =()=>{
    setIsEditing(false)
   }
  return (
    <div className="new-expense">
       {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
        {isEditing && <ExpenseForm onSaveExpenseData ={saveDataHandler} 
         onCancel={endEditingHandler}/>}
    </div>
  )
}


export default NewExpense;