import { Link } from 'react-router-dom';
import ItemImg from '../test-item-img.jpeg';
import React, { useState, useEffect } from 'react';

function Row({items})  {
  // useEffect(() => {

  //   console.log(items)

  // }, [items]);

  return (
    <div className='item-holder'>
      {items.map((item, index) => {
        return (
          <Link to={`landscaping-supplies/${item.index + 1}`}>
            <div key={item.id} className='holder'>
              <img src={ItemImg} className='img'></img>
              <h1 className='name'>{item.name}</h1>
              
              <h3 className='price'>View Options</h3>
            </div>
          </Link>)})}

      
      </div>)
}

export default Row