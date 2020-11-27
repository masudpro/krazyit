import logo from './logo.svg';
import './Components/style/man.scss';
import './App.css';
import Home from './Components/Home/Home';
import DesignTshirt from './Components/DesignTshirt/DesignTshirt';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      

      <Router>
        <Switch>
        <Route path="/designtshirt">
            <DesignTshirt />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
