import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';  
const CheckoutLogic = () => {
  const [customersItems, setCustomersItems] = useState();
  const [complete, setComplete] = useState(false);
  const [swtch, setSwtch] = useState(false);
  const [payment, setPayment] = useState(false);
  const [mes, setMes] = useState('')
  const [cookies, setCookie] = useCookies(['cart']);
  const handlePartOne = (x) => {

    setMes(`${x}`)
    setComplete(true)
  }

  const updateCart = (prdct, kase) => {
    if (kase === 'remove') {
      let help = customersItems
      help.forEach((item, index) => {
        if (item.name === prdct.name) {
          console.log('hit', index)
          help.splice(index, 1)
          setCookie('cart', help, {
            path: '/'
          });
          setCustomersItems(help)
          // alert("removed from cart!");
          let modal = document.getElementById("myModal");
          modal.style.display = "block";
          setTimeout(function () {
            modal.style.display = "none";
          }, 2000);
        }
      })
    } else if (kase === 'add') {
      let help = customersItems
      help.forEach((item, index) => {
        console.log(item.name, prdct.name)
        if (item.name === prdct.name) {
          item.value = Number(item.value) + 1


        }
      })

      setCookie('cart', help, {
        path: '/'
      });
      setCustomersItems(help)
  
      let modal = document.getElementById("myModal");
      modal.style.display = "block";
      setTimeout(function () {
        modal.style.display = "none";
      }, 2000);

    } else {
      let help = customersItems
      help.forEach((item, index) => {
        if (item.name === prdct.name) {
          item.value = Number(item.value) - 1


        }
      })


      setCookie('cart', help, {
        path: '/'
      });
      setCustomersItems(help)
      let modal = document.getElementById("myModal");
      modal.style.display = "block";
      setTimeout(function () {
        modal.style.display = "none";
      }, 2000);
    }

  }
  const handleSwitch = () => {
    setSwtch(true)
  }
  const handleChangeInPayment = () => {
    setPayment(!payment);
  }
  return {
    updateCart,
    handleSwitch,
    handleChangeInPayment,
    handlePartOne,
    cookies,
    payment,
    mes,
    complete,
    swtch,
    setCustomersItems,
    customersItems
  }
};

export default CheckoutLogic;