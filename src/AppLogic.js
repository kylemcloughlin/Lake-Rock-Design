import { useCookies } from 'react-cookie';
import { useState } from 'react';

const AppLogic = () => {
    const [content, setContent] = useState(0)
    const [sold, setSold] = useState(false)
    const [cart, setCart] = useState([])
    const [cookie, setCookie, removeCookie] = useCookies(['cart']);
    const handleNavClick = (value) => {
      setContent(value)
    }





    const handleCart = (x) => {
      console.log(x);
      setCart(x)
    }

    const clearCart = () => {
      console.log('hihtithi')
      removeCookie('cart', '/')
      setCart([])
      setSold(true)
    }


    return {  handleCart, clearCart, handleNavClick, content, sold, cart}


  } ;


  export default AppLogic;