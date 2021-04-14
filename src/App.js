import React, {useState,useEffect}  from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import  { getToken, onMessageListener } from './firebase';
import GlobalStyle from './globalStyle';
import Navbar from './components/Navbar';
import Dropdown from './components/Dropdown';
import Home from './pages/Home';
import Products from './pages/Products';
// import Toast from './components/Toast';

function App() {

  const [isOpen, setIsOpen] = useState(false)
  const [show, setShow] = useState("false");
  const [notification, setNotification] = useState({title: '', body: ''});
  const [isTokenFound, setTokenFound] = useState(false);
  getToken(setTokenFound);
  console.log(isTokenFound)


  const toggle = () => {
      setIsOpen(!isOpen)
  }

  useEffect(() => {
    if(show==="true"){
      setTimeout(()=>setShow("false"), 15000)
    }
  },[show])

  onMessageListener().then(payload => {
    setShow("true");
    setNotification({title: payload.notification.title, body: payload.notification.body})
    console.log("********************************************************************************************")
    console.log(payload);
    console.log(notification);
  }).catch(err => console.log('failed: ', err));

  return (
    <>
      <GlobalStyle/>
      {/* <Toast show={show} title={notification.title} content={notification.body}/> */}
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
