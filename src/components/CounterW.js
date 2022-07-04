import { useState } from 'react';
import classes from './CounterW.module.css';

const CounterW = () => {
  const [counter, setCounter] = useState(0);

  const incrementHandler = () => {
    setCounter((preState) => preState + 1);
  };

  const decrementHandler = () => {
    setCounter((preState) => preState - 1);
  };

  const incrementby = () => {
    setCounter((preState) => preState + 10);
  };

  return (
    <main className={classes.counter}>
      <h1>Without Redux</h1>
      <div className={classes.value}> {counter} </div>
      <div>
        <button onClick={incrementHandler}> Increment </button>
        <button onClick={incrementby}> Increment by 10 </button>
        <button onClick={decrementHandler}> Decrement </button>
      </div>
    </main>
  );
};

export default CounterW;
