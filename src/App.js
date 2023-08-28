import React from 'react';
import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
function App() {
  const expense = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2023, 3, 28),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2023, 3, 28)},
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2023, 3, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },




  ]

  
  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense />
     <Expenses sally = {expense}/>
    </div>
  );
}

export default App;
