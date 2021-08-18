// import '../styles/home.css';
import React, { useState, useEffect } from 'react';

function Landscaping() {
  let [items,setItems] = useState([])
  let [error, setError] = useState(null)
  let [loading, setLoading] = useState(false)
  const [count, setCount] = useState(0);
  useEffect(() => {
  handleFetch()


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
     


    </div>
  );
}

export default Landscaping;