import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import LoanApproved from './pages/LoanApproved';
import Shop from './pages/Shop';
import AddItems from './pages/AddItems';
import AddToCart from './pages/AddToCart';

import './App.css';
import Layout from './components/layout/Layout';

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/laon-approved'>
          <LoanApproved />
        </Route>
        <Route path='/shop'>
          <Shop />
        </Route>
        <Route path='/add-items'>
          <AddItems />
        </Route>
        <Route path='/cart'>
          <AddToCart />
        </Route>
      </Switch>
    </Layout>
  );
};

export default App;
