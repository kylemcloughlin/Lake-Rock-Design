// import '../styles/home.css';
import React, { useState, useEffect } from 'react';
import ItemImg from '../../test-item-img.jpeg';
import { useCookies } from 'react-cookie';

function Item({ match, location, handleCart}) {
  let [item, setItem] = useState({})
  let [error, setError] = useState(null)
  let [loading, setLoading] = useState(true)
  const [cookies, setCookie] = useCookies(['cart']);
  useEffect(() => {
    handleFetch()
    // console.log(item)
    // let cookie = Cookies.get('cart')
    console.log(cookies)
    if( loading === false) {
      priceHelper(item.price)

    }
  }, [loading]);

   const handleFetch = () => {


    //  fetch(`http://localhost:3001/items/${match.params.itemId}`)     
     fetch(`https://fathomless-lake-40918.herokuapp.com/items/${match.params.itemId}`) 
    .then(response  => {
      if(response.ok) {
        return response.json()
      } else{
        throw response;
      }
    })
    .then( data => {
      // console.log(data)
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
    // console.log(output)
    return output
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    let  helper = cookies.cart
    let addToCart = {
      name: item.name,
      value: e.target.points.value
    }
    console.log(helper)
    if(helper != null) {
      helper.forEach((item, index) => {
          if (item.name === addToCart.name) {
              addToCart.value = Number(item.value) + Number(addToCart.value)
              helper.splice(index, 1);
          }
      })
      helper.push(addToCart)
      setCookie('cart', helper, { path: '/' });
      handleCart(helper)

      console.log('hit')
    } else {
      setCookie('cart', [addToCart], { path: '/' });
      handleCart([addToCart])
    }
  }
  return (
    <div>
      <h1>{item.name}</h1>
      <img src={ItemImg}></img>
      <h1>{item.name}</h1>
      <h4>{item.disc}</h4>
      {loading ? (<h2></h2>): (
        <h2>{priceHelper(item.price)}{item.unit}</h2>

      ) }

        
      <form onSubmit={handleSubmit}>
        <label for="points">Points:</label>
        <input type="number" id="points" min='0' name="points"/>
        <input type="submit" value="Submit" />
      </form>
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