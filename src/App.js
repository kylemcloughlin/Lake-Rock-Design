import Footer from './components/footer.jsx';
import Header from './components/header.jsx';
import Nav  from './components/nav.jsx';
import Home from './components/tabs/home';
import Design from './components/tabs/design';
import Gallery from './components/tabs/gallery';
import Landscaping from './components/tabs/landscaping';
import Plants from './components/tabs/plants';
import Contact from './components/tabs/contact';
import Item from './components/tabs/item';
import Checkout from './components/tabs/checkout';
import Request from './components/tabs/request'
import React, { useState, useEffect } from 'react';
import banner from './banner.jpg';
import { useCookies } from 'react-cookie';

import './styles/App.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
function App() {
  const [content, setContent] = useState(0)
  const [sold, setSold] = useState(false)
  const [cart, setCart] = useState([])
const [cookies, setCookies, removeCookie] = useCookies(['cart']);
  const handleNavClick = (value) =>{ 
    console.log("value", value)
    setContent(value)
  }
 useEffect(() => {


},[content]);



  const handleCart = (x) => {
    console.log(x);
    setCart(x)
  }

  const clearCart = () => {
    console.log('hihtithi')
    removeCookie('cart',  '/')
    setCart([])
    setSold(true)
  }

   
    
    // setCookie('cart', [addToCart], { path: '/' });
      // handleCart([addToCart])
      // alert("added to cart!");
   


return (
    <Router>
    <div className="App">
      <Header cart={cart} complete={sold}/>
      <img src={banner} className='banner'/>
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

       <div className="push"></div>
    </div>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
