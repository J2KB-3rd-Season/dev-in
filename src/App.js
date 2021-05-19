import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Routes from "./Routes";

function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
