import Card from "./components/UI/Card";
import ExpenseItem from "./components/Expenses/ExpenseItem";

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
      location: "Vadodara",
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12),
    location: "Varsova" ,},
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
      location: "Varanasi",
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
      location: "Vaishali",
    },
  ];

  // const component =[];
  // for(let i=0;i<expenses.length;i++){
  //   let exp = expenses[i]
  //   component.push(<ExpenseItem title ={exp.title}
  //   amount ={exp.amount}
  //   date ={exp.date}
  //   location ={exp.location}>
  //  </ExpenseItem>)
  // }
  return (
    <Card>
      <h2>Let's get started!</h2>
      <div>
         {
            expenses.map(exp =>(
              <ExpenseItem title ={exp.title}
               amount ={exp.amount}
               date ={exp.date}
               location ={exp.location}>
              </ExpenseItem>
          ))
          } 
          {/* {
            component
          } */}
       </div>      
    </Card>
  );
}

export default App;
