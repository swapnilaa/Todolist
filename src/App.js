//import logo from './logo.svg';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Home';
import MyTasks from './MyTasks';
import Navbar from './Navbar';

function App() {
  return (
    <div>
  <Navbar/>
  <Switch>
    <Route path="/mytasks" component={MyTasks}/>
    <Route path="/" component={Home}/>
  </Switch>
  </div>
  );
}

export default App;
