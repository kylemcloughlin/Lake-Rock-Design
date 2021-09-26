import { Link } from 'react-router-dom';
import ItemImg from '../test-item-img.jpeg';
import React, { useState, useEffect } from 'react';

let cats = ['Soil', 'Landscape Rock', 'Gravel', 'Related Products']

function Row({items})  {
  // console.log(items)
  // useEffect(() => {

  //   console.log(items)

  // }, [items]);

  return (
    <div className='item-holder'>
      {items.map((item, index) => {
        return (
          <Link to={`landscaping-supplies/${item.index + 1}`} key={index}>
            <div className='holder'>
              <img src={item.thumb} className='img' ></img>
              <div className='card-bottom-holder'>
                <h6 className='cat'>{cats[item.cat_id - 1]}</h6>
              <h2 className='name'>{item.name}</h2>
              <h3 className='price'>View Options</h3>

              </div>
              
            </div>
          </Link>)})}

      
      </div>)
}

export default Row