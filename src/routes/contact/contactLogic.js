const contactLogic = () => {
  const handleTelly = () => {

    window.location.href = 'tel:4165095458';
  }

  const handleEmail = () => {
    var link = "alex@lakerockdesign.com" +
      "?cc=" +
      "&subject=" + encodeURIComponent("Contact Inquiry");


    window.location.href = link
  }

  return { handleEmail, handleTelly }
}


export default contactLogic;