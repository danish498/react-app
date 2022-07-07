import classes from './ExpensesItems.module.css';
import Card from '../UI/Card';

import ExpensesDate from './ExpensesDate';

const ExpensesItems = (props) => {
  // console.log(props.date);
  return (
    <Card classNa={classes['expense-item']}>
      <ExpensesDate date={props.date} />
      <div className={classes['expense-item__description']}>
        <h2>{props.title}</h2>
        <div className={classes['expense-item__price']}>${props.amount}</div>
      </div>
    </Card>
  );
};

export default ExpensesItems;
