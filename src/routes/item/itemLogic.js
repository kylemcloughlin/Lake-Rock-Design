import React, { useState, useEffect } from 'react';
import {useCookies } from 'react-cookie';
const ItemLogic = () => {
    let [item, setItem] = useState({})
    let [setError] = useState(null);
    let [loading, setLoading] = useState(true);
    const [cookies, setCookie] = useCookies(['cart']);
  let cats = ['Soil', 'Landscape Rock', 'Gravel', 'Related Products'];
  const handleFetch = (itemId) => {
    fetch(`https://fathomless-lake-40918.herokuapp.com/items/${itemId}`)
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw response;
        }
      })
      .then(data => {
        setItem(data)
      })
      .catch(error => {
        console.error("Error fetching data", error)
        setError(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }
  const priceHelper = (price) => {
    let output = price.toString()
    output = output.split("")
    let one = output[output.length - 1]
    let two = output[output.length - 2]
    output.splice(output.length - 2, 2, ".", `${one}${two}`)
    output = output.join("")
    return output
  }
  
  const handleFullScreen = (item, e) => {
    // console.log(item, e)
    let modal = document.getElementById("imgModal");
    let modalImg = document.getElementById("img01");
    let captionText = document.getElementById("caption");
    modal.style.display = "block";

  }

  const handleCloseFull = () => {
    let modal = document.getElementById("imgModal");
    modal.style.display = "none";
  }

  return {
    cats, 
    handleCloseFull,
    handleFullScreen,
    handleFetch,
    priceHelper,
    item,
    loading,
    cookies, 
    setCookie
  }
}


export default ItemLogic;