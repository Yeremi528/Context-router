
import './App.css';
import UserElejido from './components/UserElejido';
import UserList from './components/UserList';
import UserState from "./content/UserState"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

function App() {
  return (
    <UserState>
      <Router>
        <Switch>
          <Route exact path="/">
            <UserList />
          </Route>
          <Route exact path="/profile">
            <UserElejido />
          </Route>
        </Switch>
      </Router>
    </UserState>
  );
}

export default App;
