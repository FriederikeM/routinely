import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <main>
          <Switch>
            <Route exact path="/">
              <h1>Hello from the home</h1>
            </Route>
            <Route exact path="/weekly-routine">
              <h1>Hello from the weekly routine</h1>
            </Route>
            <Route exact path="/products">
              <h1>Hello from the product list</h1>
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
