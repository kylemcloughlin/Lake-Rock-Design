import Footer from './components/footer.jsx';
import Header from './components/header.jsx';
import Nav  from './components/nav.jsx';
import Home from './components/tabs/home';
import Design from './components/tabs/design';
import Gallery from './components/tabs/gallery';
import Landscaping from './components/tabs/landscaping';
import Plants from './components/tabs/plants';
import Contact from './components/tabs/contact';
import React, { useState, useEffect } from 'react';
import banner from './banner.jpg';
import './styles/App.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
function App() {
  const [content, setContent] = useState(0)
  
  const handleNavClick = (value) =>{ 
    console.log("value", value)
    setContent(value)
  }
 useEffect(() => {
   
},[content]);


return (
    <Router>
    <div className="App">
      <Header/>
      <img src={banner} className='banner'/>
      <Nav passNav={handleNavClick}/>
       <div className="wrapper">
    <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/design-and-contstruction' component={Design}/>
      <Route path='/landscaping-supplies' component={Landscaping}/>
      <Route path='/past-work-gallery' component={Gallery}/>
      <Route path='/plants-and-trees' component={Plants}/>
      <Route path='/contact' component={Contact}/>
    </Switch>

       <div className="push"></div>
    </div>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
