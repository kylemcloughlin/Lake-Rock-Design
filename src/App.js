import Footer from './components/footer'
import Header from './components/header.jsx';
import Nav  from './components/nav.jsx';
import Home from './tabs/home';
import Design from './tabs/design';
import Gallery from './tabs/gallery';
import Landscaping from './tabs/landscaping';
import Plants from './tabs/plants';
import Contact from './tabs/contact';
import Item from './tabs/item';
import Checkout from './tabs/checkout';
import Request from './tabs/request';
import AppLogic from './AppLogic.js';
import {Helmet} from 'react-helmet';
import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import CookieConsent from "react-cookie-consent";
import './styles/App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
function App() {
  const {  handleCart, clearCart, handleNavClick, content, sold, cart} = AppLogic();

 useEffect(() => {
},[content]);

    
return (
    <Router>
    <div className="App">
      <Header cart={cart} complete={sold}/>
        <Helmet>
          <title>Lake Rock Design - Landscaping, Garden Centre, Rock Gardens, Apsley Ontario</title>
          <meta name="description" content="Located in Apsley, Ontario, Lake Rock Design offers professional landscape design and construction along with a complete line of landscaping products, plants, and a fast delivery service." />
          <meta name="keywords" content="Landscaping, Landscaping Material,Garden Centre, Rock Gardens, Apsley Ontario"/>
      </Helmet>
      <Nav passNav={handleNavClick}/>
       <div className="wrapper">
    <Switch>
      <Route path='/' exact component={Home} alt='some value'/>
      <Route path='/design-and-contstruction' component={Design}/>
      <Route path='/landscaping-supplies/:itemId' render={({match}) => { return(<Item match={match} handleCart={handleCart}/>)}}/>
      <Route path='/landscaping-supplies' component={Landscaping}/>
      <Route path='/past-work-gallery' component={Gallery}/>
      <Route path='/plants-and-trees' component={Plants}/>
      <Route path='/contact' component={Contact}/>
      <Route path='/request-quote' component={Request}/>
      <Route path='/checkout' render={() => { return(<Checkout cart={cart} clearCart={clearCart} /> )}} ></Route>
      
        {/* add cart here */}
    </Switch>
  <CookieConsent
    location="bottom"
  buttonText="ACCEPT"
  cookieName="myAwesomeCookieName2"
  style={{ background: "#2B373B" }}
  buttonStyle={{ background: "#49974E", color: '#fefefefe', fontSize: "13px" }}
  expires={90}
    >This website uses cookies to enhance the user experience.</CookieConsent>
       <div className="push"></div>
    </div>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
