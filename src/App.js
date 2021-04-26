import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/weekly-routine">
            <h1>Hello from the weekly routine</h1>
          </Route>
          <Route exact path="/products">
            <h1>Hello from the product list</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
