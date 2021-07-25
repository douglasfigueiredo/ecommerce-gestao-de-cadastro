import { Switch, Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Customers from "./pages/Customers";
import Products from "./pages/Products";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/clientes' component={Customers} />
        <Route path='/produtos' component={Products} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
