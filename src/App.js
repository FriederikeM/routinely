import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import ProductList from "./components/ProductListPage/ProductList";
import WeeklyRoutine from "./components/WeeklyRoutinePage/WeeklyRoutine.js";
import DailyRoutine from "./components/DailyRoutinePage/DailyRoutine.js";
import SingleProduct from "./components/SingleProductPage/SingleProduct.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/weekly-routine/:weekday">
            <DailyRoutine />
          </Route>
          <Route exact path="/weekly-routine">
            <WeeklyRoutine />
          </Route>
          <Route exact path="/products">
            <ProductList />
          </Route>
          <Route exact path="/products/:single-product">
            <SingleProduct />
          </Route>
          <Route path="*">
            <h2>Nothing to see here 👀 Please go back</h2>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
