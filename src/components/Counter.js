import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/counter';

import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();

  const counter = useSelector((state) => state.counter.counter);
  console.log(counter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const incrementbyHandler = () => {
    dispatch(counterActions.incrementby(10));
  };

  return (
    <main className={classes.counter}>
      <h1>With Redux</h1>
      <div className={classes.value}> {counter} </div>
      <div>
        <button onClick={incrementHandler}> Increment </button>
        <button onClick={incrementbyHandler}> Increment by 10 </button>
        <button onClick={decrementHandler}> Decrement </button>
      </div>
    </main>
  );
};

export default Counter;
