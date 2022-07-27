import { Switch } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Route from "./route";
import infoProfile from "../pages/InfoProfile";
import OrderProfile from "../pages/OrdersProfile";

const Routes = () => {
  return (
    <Switch>
      <Route isPrivate path="/dashboard" component={Dashboard} />
      <Route isPrivate path="/cart" component={Cart} />
      <Route isPrivate path="/profile" component={infoProfile} />
      <Route isPrivate path="/order" component={OrderProfile} />
      <Route exact path="/" component={Login} />
      <Route path="/signup" component={Signup} />
    </Switch>
  );
};
export default Routes;
