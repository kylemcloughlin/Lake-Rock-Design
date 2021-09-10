import '../../styles/landscaping.css';
import Row from '../row.jsx';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Landscaping() {
  let [items, setItems] = useState([]);
  let [error, setError] = useState(null);
  let [loading, setLoading] = useState(true);
  let [mess, setMess] = useState('start')
  useEffect(() => {
    handleFetch()
   

  }, []);
  const handleFetch = async () => {
    setMess('in fetch')
    // setTimeout(function () {setMess('in fetch deux')}, 3000)
    try { 

      
      const response = await axios.get('https://fathomless-lake-40918.herokuapp.com/items', {
        withCredentials: true,
        headers: {
          'Content-Type': 'none'
        }
      })
      // .then(response => {
        setMess('hit first then')
        
        let data = response.data;
        let outputHolder = []
        let output = []
        setMess(`${data.length} why god why`)
        for (let index = 0; index < data.length; index++) {
            let element = data[index];
            element.index = index;
            if (outputHolder.length > 3) {
              output.push(outputHolder);
              outputHolder = [];
              outputHolder.push(element);
            } else {
              outputHolder.push(element);
            }
          }
          if (outputHolder.length > 0) {
            output.push(outputHolder);
            // setMess('hit last if if then')
            
            
          }
          
          // setMess('hit right above loading')
          
          setItems(output)
          setLoading(false)
          
        // })
        
      } catch (error) {
        console.error("Error fetching data", error)
        setMess(` errror ${error.status}`)
  
  
        // setMess(error)
      }
        
        
      }
      
      // const handleMore = (e) => {
        
  // }

  // if (loading) {
  //   return (
  //     <div className="loader-holder">
  //       <div className="loader"></div>
  //       <div > {mess}</div>
  //     </div>)

  // }


  return (
    <div>
      <div className='lndscp-ttl'>
        <h1>Our Landscape Material</h1>
        <p>At Rock Lake Design, we carry only the highest-quality, professional-grade products. From big jobs to small projects, we have what you need for landscape designs of all sizes.</p>
        <p>Whether you are a homeowner, DIYer, Property Manager, General Contractor, Landscape Architect, or Lawn Maintenance company, we stock the materials you need to create inspiring outdoor spaces</p>
        <div key={new Date()}>{mess}</div>
      </div>
      {items.map((item, index) => {
        return (
          <div className='item-holder' key={index}>
            {/* <Row items={item} /> */}
            {mess}
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