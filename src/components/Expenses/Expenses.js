import Card from '../UI/Card';
import ExpensesItems from './ExpensesItems';
import './Expenses.css';

const Expenses = (props) => {
  console.log(props);
  return (
    <Card className='expenses'>
      {props.items.map((expense) => (
        <ExpensesItems
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
