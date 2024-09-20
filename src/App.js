import React from 'react';

//import AddExpense from './components/ExpenseItem';
import ExpenseList  from './components/Expense/Expense';

const App=()=>{
  const date = new Date()
  const expenses = [
    { id: 1, title: 'Starter', price: 200, location: 'Restaurant',date : date },
    { id: 2, title: 'Fuel', price: 500, location: 'Fuel Station' , date : date },
    { id: 3, title: 'Kalki', price: 500, location: 'Movie Threater', date :date},
    { id: 3, title: 'Beach', price: 16000, location: 'Goa', date :date},
  ];
 

  return (
    <div>
     <ExpenseList Items={expenses}/>
    </div>
  );
}

export default App;

/*
    {expenses.map((expense) => (
        <AddExpense
        date = {expense.date}
       id={expense.id}
       title={expense.title}
       location={expense.location}
       price={expense.price}
    />
   
*/
