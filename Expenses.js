

import React, { useState } from 'react';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpenseChart from './ExpenseChart';
import Card from '../UI/Card';

const Expenses = (props) => {

  const [filteredYear,setFilterYear] = useState("2020");

  const filterHandler = (selectedYear)=> {
    setFilterYear(selectedYear);
  }
  
  const filteredExpenses = props.items.filter(expense => 
    expense.date.getFullYear().toString() === filteredYear);


   
  return (
    <Card className="expenses">
      <ExpenseFilter selected ={filteredYear} onChangefilter ={filterHandler}/>
      <ExpenseChart expenses={filteredExpenses}/>
      <ExpensesList item ={filteredExpenses} />
    </Card>
  );
}

export default Expenses;