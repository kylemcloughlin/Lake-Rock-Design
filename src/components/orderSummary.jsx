import React, { useState, useEffect } from 'react';
import '../styles/orderSummary.css';

function OrderSummary({customersItems, updateCart, swtch, handleChangeInPayment}) {
  console.log(customersItems)
  let [orders, SetOrders] = useState([])
  let [dropOff, SetdropOff] = useState(true)
  let [pickUp, SetPickUp] = useState(false)

  console.log('order summary', customersItems)
  useEffect(() => {
    if (customersItems)  {
      
      SetOrders(customersItems)

    }
    console.log('order summary', customersItems)
  }, [customersItems])

  const handleRemove = (e) => {
    updateCart(e, 'remove')
  }
  const handlePos = (e) =>{
    console.log(e)
    updateCart(e, 'add')


  }
  const handleNeg = (e) => {
    console.log(e)
    updateCart(e, 'neg')


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

  const totalHelper = (price, multi) => {
    if (Number(multi) === 0) {
      return '0'
    } else {
      let newNum = Number(price) * Number(multi);
      console.log(newNum)
      let output = newNum.toString()
      output = output.split("")
    let one = output[output.length - 1]
    let two = output[output.length - 2]
    output.splice(output.length - 2, 2, ".", `${one}${two}`)
    output = output.join("")
    return output
  }
  }


  const hst = (orders) => {
    let price = 0;
    orders.forEach( item => {
      let newNum = Number(item.price) * Number(item.value);
      price = price + newNum;
      
    })
    let output = Number(price) * 0.13;
      output = Math.floor(output);
    if (output === 0) {
      return '0'
    } else {
      output = output.toString();
      output = output.split("")
      let one = output[output.length - 1]
      let two = output[output.length - 2]
      output.splice(output.length - 2, 2, ".", `${one}${two}`)
      output = output.join("")
      return output;

    }
  
  }

const totalSum = (orders) => {
    let output= 0;
    orders.forEach( item => {
      let newNum = Number(item.price) * Number(item.value);
      output = output + newNum;

    })
    if (output === 0) {
        return '0'
    }  else  {
      output = output.toString();
      output = output.split("")
      let one = output[output.length - 1]
      let two = output[output.length - 2]
      output.splice(output.length - 2, 2, ".", `${one}${two}`)
      output = output.join("")
      return output;

    }
}

const totalWithTax = (orders) => {
    console.log('hahaahahahahah', orders)
  if( orders.value < 0) {
      return 0
    } else {

      let output = 0;
      orders.forEach(item => {
        let newNum = Number(item.price) * Number(item.value);
        output = output + newNum;
        
      })
      let hst = Number(output) * 0.13;
          output = Math.floor(output);
    if (output === 0) {
      return '0'
    } else {
      output = output + hst
      output = output.toString()
      output = output.split("")
      let one = output[output.length - 1]
      let two = output[output.length - 2]
      output.splice(output.length - 2, 2, ".", `${one}${two}`)
      output = output.join("")
      return output;

    }
    }
}
const handleCheckBox = (e) => {
let name = e.target.name
  if (name === 'pickup') {
  SetdropOff(false)
  SetPickUp(true)
  handleChangeInPayment()

} else  {
  SetdropOff(true)
  SetPickUp(false)
  handleChangeInPayment()

}
} 
    if(swtch) {
      console.log(orders)
      return (
                <div className='os-total-holder'>       
                <h3 className='subtotal-os'>Subtotal: ${totalSum(orders)}</h3>
                <div className='checkbox-holder'>
                <div className='deliver-holder'>
                    <label for='checkbox'>Request Shipping Quote</label>
                    <input name='checkbox' type='checkbox' checked={dropOff}  checked='true' className='radio'/>
                </div>
                    <br/>
                    <div className='pick-up-holder'>
                    <label for='pickup'>Pick Up (Currently unavailable for pick up)</label>
              <input name='pickup' type='checkbox' checked='' className='radio' disabled='true'/>
                    </div>
                </div>
                  <div className='underline'/>
                <h3 className='hst-os'>HST: ${hst(orders)}</h3>
                <br/>
                <h3 className='total-os'>Total: ${totalWithTax(orders)}(CAD)</h3>
               </div> 

          )
    }
  

  console.log(orders.length > 0)

return (
      <div>
        <div className='order-head'>
          <h2>Order Summary</h2>
          <h5 className='product'>Product</h5>
          <h5 className='quant'>Quantity</h5>
          <h5 className='ppu'>Price Per Unit</h5>
          <h5 className='ttl'>Total</h5>
        </div>
        <div className='left'>
        <ul>
         {orders.map((item) => {
           return(
             <li key={item.id} className='item-checkout'>
              <div className='name-and-button'>             
                <h5>{item.name}</h5>
                 <button className='remove-button' onClick={handleRemove.bind(this, item)}>x</button>
             </div>
               {/* <input className='co-value' type="number" id="points" min='0' name={} value={item.value} onClick={handleNumberClick.bind(this, item)}/> */}
               <div className='co-value'>
                   <h4>{item.value}</h4>
                   <div className='co-button-wrap'>
                     <button className='co-value-btn' value='+' onClick={handlePos.bind(this, item)}>+</button>
                     {item.value > 0 ? (<button className='co-value-btn' value='-' id='minus' onClick={handleNeg.bind(this, item)}>-</button>) : (<div/>)}
                   </div>
             </div>
             <h4 className='co-price'>${priceHelper(item.price)}</h4>
             <h4 className='co-total'> ${totalHelper(item.price, item.value)}</h4>
            </li>
           )
          })}
          </ul>

        
        </div>
    </div>
  );
}

export default OrderSummary;