// import '../styles/home.css';
import React, { useState, useEffect } from 'react';

function Item({ match, location }) {
  let [items, setItems] = useState({})
  let [error, setError] = useState(null)
  let [loading, setLoading] = useState(false)
  useEffect(() => {
    handleFetch()
    console.log(items)

  }, []);

   const handleFetch = () => {
     console.log(match.params.itemId, "happen in other peoples lives")
     fetch(`http://localhost:3001/items/${match.params.itemId}`) 
    .then(response  => {
      if(response.ok) {
        return response.json()
      } else{
        throw response;
      }
    })
    .then( data => {
      console.log(data)
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
      <h1>{items.name}</h1>
      {/* <p>
        <strong>Match Props: </strong>
        <code>{JSON.stringify(match, null, 2)}</code>
      </p>
      <p>
        <strong>Location Props: </strong>
        <code>{JSON.stringify(location, null, 2)}</code>
      </p> */}
    </div>
  );
}

export default Item;