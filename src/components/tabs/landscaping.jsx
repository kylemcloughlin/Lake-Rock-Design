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
      <h1>Our Landscape Material</h1>
   
  <p>At Rock Lake Design, we carry only the highest-quality, professional-grade products. From big jobs to small projects, we have what you need for landscape designs of all sizes.</p>
  
  <p>Whether you are a homeowner, DIYer, Property Manager, General Contractor, Landscape Architect, or Lawn Maintenance company, we stock the materials you need to create inspiring outdoor spaces</p>
  
  
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
            <button className='lndscp-button'>More</button>
        </div>

    </div>
  );
}

export default Landscaping;