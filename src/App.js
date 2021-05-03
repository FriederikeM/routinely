import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import ProductList from "./components/ProductListPage/ProductList";
import WeeklyRoutine from "./components/WeeklyRoutinePage/WeeklyRoutine.js";
import DailyRoutine from "./components/DailyRoutinePage/DailyRoutine.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/weekly-routine">
            <WeeklyRoutine />
          </Route>
          <Route exact path="/daily-routine">
            <DailyRoutine />
          </Route>
          <Route exact path="/products">
            <ProductList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
