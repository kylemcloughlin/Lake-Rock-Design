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
    fetch('http://localhost:3001/items') 
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
     <div>{items.map((item, index) => {
       return (
         <Link to = {`landscaping-supplies/${index + 1}`}>
       <div key={item.id} className='holder'>
               <img src={ItemImg}></img>
               <h1>{item.name}</h1>
               <h4>{item.disc}</h4>
               <h2>{item.price}{item.unit}</h2>
               </div>
               </Link>)
     })
    }</div>


    </div>
  );
}

export default Landscaping;