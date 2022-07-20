import { Redirect, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import LoanApproved from './pages/LoanApproved';
import Shop from './pages/Shop';
import AddItems from './pages/AddItems';
import AddToCart from './pages/AddToCart';

import './App.css';
import Layout from './components/layout/Layout';
import Amazon from './pages/Amazon';
import Flipkart from './pages/Flipkart';
import Macys from './pages/Macys';

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/home' />
        </Route>
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/laon-approved'>
          <LoanApproved />
        </Route>
        <Route path='/shop'>
          <Shop />
        </Route>
        <Route path='/amazon' component={Amazon} />
        <Route path='/flipkart' component={Flipkart} />
        <Route path='/macys' component={Macys} />
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
