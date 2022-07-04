import { Fragment } from 'react';
import Counter from '../components/Counter';
import CounterW from '../components/CounterW';

const Home = () => {
  return (
    <Fragment>
      <CounterW />
      <Counter />
    </Fragment>
  );
};

export default Home;
