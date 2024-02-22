function ExpenseDetails(props){
const title = props.title;
const location =  props.location;
const amount = props.amount;
return (
    <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__location'>{location}</div>
        <div className='expense-item__price'>Rs.{amount}</div>
    </div>
);
}

export default ExpenseDetails;