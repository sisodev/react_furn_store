import React, {useState}  from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from './globalStyle';
import Navbar from './components/Navbar';
import Dropdown from './components/Dropdown';
import Home from './pages/Home';
import Products from './pages/Products';

function App() {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
      setIsOpen(!isOpen)
  }

  return (
    <>
      <GlobalStyle/>
      <Router>
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      
        <Switch>
        <Route exact path="/">
            <Home/>
        </Route>
        <Route path="/products">
            <Products/>
        </Route>
        
        </Switch>
      </Router>
    </>
  );
}

export default App;
