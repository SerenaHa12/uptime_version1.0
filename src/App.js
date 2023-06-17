import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomePage } from './Pages/HomePage/HomePage'
import { LoginPage } from './Pages/LoginPage/LoginPage';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route path="/home" component={HomePage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
