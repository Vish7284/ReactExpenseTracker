import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import './ExpenseItem.css';
import '../UI/Card';
import Card from '../UI/Card';


function ExpenseItem(props){
    const clickHandler =() =>{
        console.log("Delete expense")
    }
    return (
    <Card className='expense-item'>
        <ExpenseDate date={props.date}/>
         <ExpenseDetails title ={props.title}
          location={props.location}
           amount={props.amount}/>
        <button onClick={clickHandler}>Delete Expense</button>
    </Card>)
}

export default ExpenseItem;