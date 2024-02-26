

import React, { useState } from 'react';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

const Expenses = (props) => {

  const [filteredYear,setFilterYear] = useState("2020");

  const filterHandler = (selectedYear)=> {
    setFilterYear(selectedYear);
  }
  
  const filteredExpenses = props.items.filter(expense => expense.date.getFullYear().toString() === filteredYear);
  return (
    <Card className="expenses">
      <ExpenseFilter selected ={filteredYear} onChangefilter ={filterHandler}/>
      {filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          location={expense.location}
          date={expense.date}
        />
      ))}
    </Card>
  );
}

export default Expenses;