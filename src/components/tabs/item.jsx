// import '../styles/home.css';
import React, { useState, useEffect } from 'react';
import ItemImg from '../../test-item-img.jpeg';
import photo from '../../bangerLogo.png';
import { useCookies } from 'react-cookie';
import Modal from '../modal.jsx';
import { Link } from 'react-router-dom';
let cats = ['Soil', 'Landscape Rock', 'Gravel', 'Related Products']
function Item({ match, location, handleCart }) {
  let [item, setItem] = useState({})
  let [error, setError] = useState(null)
  let [loading, setLoading] = useState(true)
  const [inProcess, setInProcess] = useState(false);

  const [cookies, setCookie] = useCookies(['cart']);
  useEffect(() => {
    handleFetch()
    // console.log(item)
    // let cookie = Cookies.get('cart')
    console.log(cookies)
    if (loading === false) {
      priceHelper(item.price)

    }
  }, [loading]);

  const handleFetch = () => {


    // fetch(`http://localhost:3001/items/${match.params.itemId}`)
      fetch(`https://fathomless-lake-40918.herokuapp.com/items/${match.params.itemId}`)
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
  const handleSubmit = (e) => {
    e.preventDefault()
    let helper = cookies.cart
    let addToCart = {
      name: item.name,
      value: e.target.points.value,
      price: item.price
    }

    if (helper != null) {
      helper.forEach((item, index) => {
        if (item.name === addToCart.name) {
          addToCart.value = Number(item.value) + Number(addToCart.value)
          helper.splice(index, 1);
        }
      })
      helper.push(addToCart)
      setCookie('cart', helper, { path: '/' });
      handleCart(helper)


      // alert("added to cart!");
      let modal = document.getElementById("myModal");
      modal.style.display = "block";
      setTimeout(function () { modal.style.display = "none"; }, 2000);
    } else {
      setCookie('cart', [addToCart], { path: '/' });
      handleCart([addToCart])
      // alert("added to cart!");
      let modal = document.getElementById("myModal");
      modal.style.display = "block";
      setTimeout(function () { modal.style.display = "none"; }, 2000);

    }
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
  return (
    <div>
      <Link to={'/landscaping-supplies'}>
        <button className='back-btn-item'>BACK</button>
      </Link>
      <div className='product-holder'>
        <Modal />
        <div className='item-holder'>
          <div className='img-holder'>
            <div className='img-wrapper'>
              <img src={item.thumb} className='item-page-img'></img>
            </div>
            <br />
            <input id="clickbutton" type="button" value='Click To Enlarge' className='enlarge-btn' onClick={handleFullScreen.bind(this, item)} />
          </div>
          <div className='item-page-body-holder'>
            <h6 className='cat-item'>{cats[item.cat_id - 1]}</h6>
            <h1>{item.name}</h1>
            <h3 className='sold-by-ttl' id='desc'>Description:</h3>
            <h4>{item.disc}</h4>
          </div>
          <div className='sold-by-holder'>
            <h3 className='sold-by-ttl'>Sold By:</h3>
            <div className='sold-by'>
              <h3>{item.unit}</h3>
            </div>
          </div>

        </div>
        <div className='form-holder'>
          <img className='item-img' src={photo} />
          <form onSubmit={handleSubmit} className='form-wrapper'>
            <div className='add-to-cart'>
              {loading ? (<h2></h2>) : (<h2 className='product-price'>${priceHelper(item.price)}</h2>)}
              {!inProcess ? (
                <div>
                  <input type="number" id="points" min='0' name="points" className='add-to-cart-input ' />
                  <input className='add-to-cart-button' type="submit" value="Add To Cart" />
                </div>
              ) : (<div className="loader-holder-item" id='ldr'><div className="loader-item"></div></div>)}
            </div>
          </form>
        </div>
        <div id="imgModal" className="modal">
          <span className="close" onClick={handleCloseFull}>&times;</span>
          <img className="img-modal-content" id="img01" src={item.photo} />
        </div>

      </div >
    </div>
  );
}

export default Item;