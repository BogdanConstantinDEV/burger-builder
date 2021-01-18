import './App.css';
import { Route, Switch } from 'react-router-dom'
import Checkout from './containers/Checkout/Checkout'
import Orders from './containers/Orders/Orders'

import Layout from './hoc/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'


const App = () => {
  return (
    <div className="App">
      <Layout >
        <Switch>
          <Route path='/' exact component={BurgerBuilder} />
          <Route path='/checkout' component={Checkout} />
          <Route path='/orders' component={Orders} />

        </Switch>
      </ Layout >
    </div>
  );
}

export default App;
