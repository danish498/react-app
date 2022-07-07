import React from 'react';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const saveDataExpenseHandler = (enteredExpensedData) => {
    const expensedData = {
      ...enteredExpensedData,
      id: Math.random().toString(),
    };
    // console.log('---2---');
    // console.log(expensedData);
    props.onAddExpense(expensedData);
  };

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveDataExpenseHandler} />
    </div>
  );
};

export default NewExpense;
