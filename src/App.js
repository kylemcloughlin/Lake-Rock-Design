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

function App() {
  const [content, setContent] = useState(0)
  
  const handleNavClick = (value) =>{ 
    console.log("value", value)
    setContent(value)
  }
 useEffect(() => {
   
},[content]);

const navOptions = [<Home/>, <Design/>, <Landscaping/>, <Gallery/>, <Plants/>, <Contact/>]
return (
    <div className="App">
      <Header/>
      <Nav passNav={handleNavClick}/>
      {navOptions[content]}
      
       <div className="wrapper">


    <div className="push"></div>
  </div>
      <Footer/>
    </div>
  );
}

export default App;
