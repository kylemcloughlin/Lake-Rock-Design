import React, { useState, useEffect } from 'react';
import '../styles/orderSummary.css';

function OrderSummary({customersItems}) {
  let [orders, SetOrders] = useState([])
  console.log(customersItems)
  useEffect(() => {
    if (customersItems)  {
      SetOrders(customersItems)

    }
    console.log(customersItems)
  }, [customersItems])


  return (
      <div>
      <h1>Order Summary</h1>
        <div className='left'>
         {orders.map((item) => {
           return(
             <div>
             <h3>name: {item.name}</h3>
             <h3>quantity: {item.value}</h3>
            </div>
           )
         })}
        </div>
    </div>
  );
}

export default OrderSummary;