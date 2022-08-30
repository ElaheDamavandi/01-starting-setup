import React, { useState } from 'react';
import Expense from "./components/Expense";
import NewExpense from "./components/NewExpense/NewExpense";

const the_Array = [
  {
    id: 'e4',
    title: "car01",
    amount: 245,
    date: new Date(2021, 2, 23),
  }
];

function App() {
 
  const [expenses, setExpenses] = useState(the_Array);
  const addExpenseHandler = expense => {
    setExpenses([expense, ...expenses]);
    
    // setExpenses((prevExpenses) => {
    //   console.log(expense);
    //   return [expense, ...prevExpenses];
    // });
  };
  console.log(expenses);
  
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expense items={expenses}/>
    </div>
  );
}

export default App;
