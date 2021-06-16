import { Route,Switch} from 'react-router';
import Home from './Components/Home';
import Download from './Components/Download';
import Login from './Components/Login';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/Login" exact component={Login}/>
      <Route path="/Download" exact component={Download}/>
      <Route path="/Contact" exact component={Contact}/>

        
      </Switch>
      
    </div>
  );
}

export default App;
