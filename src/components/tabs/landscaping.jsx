import '../../styles/landscaping.css';
import ItemImg from '../../test-item-img.jpeg';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ItemPage from './item.jsx';

function Landscaping() {
  let [items,setItems] = useState([]);
  let [error, setError] = useState(null);
  let [loading, setLoading] = useState(false);
  useEffect(() => {
  handleFetch()
    console.log(items)

  },[]);
  const handleFetch = () => {
    fetch('https://fathomless-lake-40918.herokuapp.com/items') 
    // fetch('http://localhost:3001/items') 

    .then(response  => {
      if(response.ok) {
        return response.json()
      } else{
        throw response;
      }
    })
    .then( data => {
      setItems(data)
    })
    .catch(error => {
      console.error("Error fetching data", error)
      setError(error)
    })
    // .finally(() => {
    //   setLoading(false)
    // })
  }

  return (
    <div>
      <h1>Landscaping</h1>
     <div className='item-holder'>
     {items.map((item, index) => {
       return (
         <Link to = {`landscaping-supplies/${index + 1}`}>
       <div key={item.id} className='holder'>
               <img src={ItemImg} className='img'></img>
               <h1 className='name'>{item.name}</h1>
               <p className='disc'>{item.disc}</p>
               <h3 className='price'>View Options</h3>
               </div>
               </Link>)
     })
    }</div>
        <div className='button-holder'>
            <button>More</button>
        </div>

    </div>
  );
}

export default Landscaping;