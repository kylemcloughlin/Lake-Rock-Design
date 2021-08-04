import Footer from './components/footer.jsx';
import Header from './components/header.jsx';
import Nav  from './components/nav.jsx';


// import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Nav/>
       <div className="wrapper">
      content
    <div className="push"></div>
  </div>
      <Footer/>
    </div>
  );
}

export default App;
