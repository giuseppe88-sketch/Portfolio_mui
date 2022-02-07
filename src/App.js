import './App.css';
import {BrowserRouter,Route,Switch } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';



function App() {
  return <BrowserRouter>
  
    <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
  
  </BrowserRouter>
}

export default App;
