import '../../styles/landscaping.css';
import ItemImg from '../../test-item-img.jpeg';
import Row from '../row.jsx';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ItemPage from './item.jsx';
import { dataToEsm } from 'rollup-pluginutils';

function Landscaping() {
  let [items, setItems] = useState([]);
  let [error, setError] = useState(null);
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    handleFetch()
    console.log(items)

  }, []);
  const handleFetch = () => {
    fetch('https://fathomless-lake-40918.herokuapp.com/items') 
    // fetch('http://localhost:3001/items')

      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw response;
        }
      })
      .then(data => {
      
       let  outputHolder = []
        let output = []
        for (let index = 0; index < data.length; index++) {
          const element = data[index];
          element.index = index;
          if (outputHolder.length > 3 ) {
            console.log('hit')
            output.push(outputHolder);
            outputHolder = [];
            outputHolder.push(element);
          } else  {
           outputHolder.push(element);
          }

          
        }
        if (outputHolder.length >  0) {
          console.log('hit')
          output.push(outputHolder);

        }
        console.log("yoyoyoyoyo", output)
        setItems(output)
        setLoading(false)
      })
      .catch(error => {
        console.error("Error fetching data", error)
        setError(error)
      })
    // .finally(() => {
    //   setLoading(false)
    // })
  }

  const handleMore = (e) => {
    
  }

  if (loading) {
    return (
      <div className="loader-holder">
        <div className="loader"></div>
    </div>)

  }


  return (
    <div>
      <div className='lndscp-ttl'>
        <h1>Our Landscape Material</h1>
        <p>At Rock Lake Design, we carry only the highest-quality, professional-grade products. From big jobs to small projects, we have what you need for landscape designs of all sizes.</p>
        <p>Whether you are a homeowner, DIYer, Property Manager, General Contractor, Landscape Architect, or Lawn Maintenance company, we stock the materials you need to create inspiring outdoor spaces</p>
      </div>


       
       
        {items.map((item, index) => {
          return (
            <div className='item-holder'>
               <Row items={item}/>
            </div>
            )
        })
       }
      {/* <div className='button-holder'>
        <button className='lndscp-button'>More</button>
      </div> */}

    </div>
  );
}

export default Landscaping;