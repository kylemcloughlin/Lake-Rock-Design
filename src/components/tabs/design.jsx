import '../../styles/design.css';
import photo from '../../test-img-one.jpeg';
const Design = () => {
  return (
    <div>
      <div className='title-holder'>
        <h3 className='title'>DESIGN AND CONSTRUCTION</h3>
        <h1>X YEARS EXPERIENCE</h1>
      </div>
      <div className='body-holder'> 
        <div className='paragraph-holder'>
          <p>Our qualified team will take your project from the design stage to completion in an organized, professional and timely manner. We specialize in water front and country properties.</p>
          <p>Every property is different and every design is innovative and unique, reflecting your families needs and desires. We provide scale drawings and detailed written estimates so you know exactly what you are paying for and what to expect.</p>
        </div>
        <img src={photo} className='design-photo' />
      </div>
      <div className='body-holder'>
        <div className='paragraph-holder'>
          <h2 className='title'>PLANTINGS</h2>
          <p>We strive to achieve a natural feel rather than a formal look. We use only plants that are suitable for our harsh, Zone 4, climate. <b> We are plant experts and know what to plant where for beautiful, long term results.</b></p>
        </div>
        <img src={photo} className='design-photo' />
      </div>
      <div className='body-holder'>
        <div className='paragraph-holder'>
          <h2 className='title'>FEATURES</h2>
          <p>We can give you the soothing sound of a waterfall or the romantic look of night lighting. Drip irrigation can be installed to help your new trees and gardens flourish.</p>
          <p>From Japanese gardens, Mexican stonework, putting greens, sport field or a hot tub pad, we can do whatever you desire to make your outdoor living space complete.</p>
        </div>
        <img src={photo} className='design-photo' />
      </div>
    </div>
  );
}

export default Design;