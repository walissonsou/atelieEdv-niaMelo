
import './App.css';
import Home from '../src/component/Home/Home';
import Products from '../src/component/Products/Products'
import NavBar from '../src/component/NavBar/NavBar'
import {Switch, Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <NavBar /> 
        <Switch>
          <Route exact path="/" component={Home}/>  
          <Route exact path="/products" component={Products}/> 
            <Home />
        </Switch>
    </div>
  );
}

export default App;
