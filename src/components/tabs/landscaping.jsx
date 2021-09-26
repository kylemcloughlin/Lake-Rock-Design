import '../../styles/landscaping.css';
import Row from '../row.jsx';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Landscaping() {
  let [items, setItems] = useState([]);
  let [totalItems, setTotalItems] = useState([]);
  let [vis, setVis] = useState({ visibility: 'visible' });
  let [loading, setLoading] = useState(true);
  let [mess, setMess] = useState('start');
  let [err, setErr] = useState('')
  
  function fade(elemntID) {
    // console.log(Document.getElementById(elemntID))
    let element = document.getElementById(elemntID);
    var op = 1;  // initial opacity
    
    let timer = setInterval(function () {
      try {
        if (op <= 0.1) {
          clearInterval(timer);
          setLoading(false)
          
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
      } catch (e) {
        console.error(e);
        clearInterval(timer);
      }
    }, 50);
  }
  
  const handleAddMoreItems = (e) => {
    e.preventDefault()
    console.log(totalItems)
    
    if( totalItems.length > 0) {
      console.log('hit pop') 
      let helper = totalItems[0]
      totalItems.shift()
      console.log(helper)
      setItems([...items, helper])
    } 
    
    
    if(totalItems.length === 0)  {
      setVis(({ visibility: 'hidden' }))
    }
    
  }
  
  
  
  const handleFetch = async () => {
    setMess('in fetch')
    // setTimeout(function () {setMess('in fetch deux')}, 3000)
    try {
      // const response = await axios.get('http://localhost:3001/items', {
        const response = await axios.get('https://fathomless-lake-40918.herokuapp.com/items', {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        let data = response.data;
        let outputHolder = []
        let output = []
        setMess(`${data.length}`)
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
          
          
        }
        
        
        console.log(output)
        
        let one = output.shift();
        let two = output.shift();
        console.log(output)
        setItems([one, two]);
        setTotalItems(output)
        fade('ldr')
        
        
      } catch (error) {
        if (error.response) {
          // Request made and server responded
          setErr(error.response.data);
          
        }
        console.error("Error fetching data", error)
        setMess(` errror: ${error}`)
        

      }
      
      
    }
    useEffect(() => {
      handleFetch()
    
    
    }, []);
    if (loading) {
      return (<div className='lndscp-ttl'>
      <h1>Our Landscape Material</h1>
      <p>At Rock Lake Design, we carry only the highest-quality, professional-grade products. From big jobs to small projects, we have what you need for landscape designs of all sizes.</p>
      <p>Whether you are a homeowner, DIYer, Property Manager, General Contractor, Landscape Architect, or Lawn Maintenance company, we stock the materials you need to create inspiring outdoor spaces</p>
      <div className="loader-holder" id='ldr'>
        <div className="loader"></div>
      </div>
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
          <div className='item-holder' key={index} id='item-holder-id'>
            <Row items={item} />
          </div>
        )
      })
      }
      <div className='button-holder'>
        <button className='lndscp-button' style={vis} onClick={handleAddMoreItems}>More</button>
      </div>

    </div>
  );
}

export default Landscaping;