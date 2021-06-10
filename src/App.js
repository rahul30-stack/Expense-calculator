import React,{useState} from'react';
// import Expenses from'./compnents/Expenses/Expr
import Expenses from './Expenses/Expenses';
import NewExpense from'./Expenses/NewExpense/NewExpense';



   
  const DUMMY_EXPENSES = [
    {
      id: 'e1',
      title: 'Washroom bill',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'Wi-fi', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Mess bill',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'Hostel bed',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
   function App(){
    const[expenses,setExpenses]=useState(DUMMY_EXPENSES);
    const addExpenseHandler=expense=>{
    setExpenses(prevExpenses=>{
    return[expense,...prevExpenses];
    });
  };
 
  return (
       <div>
        <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
        <Expenses items={expenses}></Expenses>
      </div>
     
  );
  }

export default App;
