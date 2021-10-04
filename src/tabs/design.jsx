import '../styles/design.css';
import { Helmet } from 'react-helmet';

const Design = () => {
  return (
    <div>
      <Helmet>
        <title>Design And Construction - Landscaping, Garden Centre, Rock Gardens, Apsley Ontario</title>
        <meta name="description" content="Located in Apsley, Ontario, Lake Rock Design offers professional landscape design and construction along with a complete line of landscaping products, plants, and a fast delivery service." />
        <meta name="keywords" content="Landscaping, Landscaping Material,Garden Centre, Rock Gardens, Apsley Ontario" />
      </Helmet>
      <div className='title-holder'>
        <h3 className='title'>DESIGN AND CONSTRUCTION</h3>
        <h1>Creating Beautiful, Naturally Inspired Enviroments</h1>
      </div>
      <div className='body-holder'> 
        <div className='paragraph-holder'>
          <p>Our qualified team will take your project from the design stage to completion in an organized, professional and timely manner. We specialize in water front and country properties.</p>
          <p>Every property is different and every design is innovative and unique, reflecting your families needs and desires. We provide scale drawings and detailed written estimates so you know exactly what you are paying for and what to expect.</p>
        </div>
        <img src="https://lh3.googleusercontent.com/pw/AM-JKLU4j8WR-RQWehneoH1WpMqE-6iRDh4C9l1Nzjmn1dVPP6WMR2cQuGMceR4TAJZC1d7aKdUQeQOuUZyfbwYGKXPRJsTkAjlQhDpXYV9TrTsA61HWV0ADPM3xvn9yNhm2KLwB4kunULMxsM5YW11KfA0b=w704-h470-no?authuser=0" className='design-photo' alt=''/>
      </div>
      <div className='body-holder'>
        <div className='paragraph-holder'>
          <h2 className='title'>PLANTINGS</h2>
          <p>We strive to achieve a natural feel rather than a formal look. We use only plants that are suitable for our harsh, Zone 4, climate. <b> We are plant experts and know what to plant where for beautiful, long term results.</b></p>
        </div>
        <img src="https://lh3.googleusercontent.com/pw/AM-JKLXSjFyWzHV6kMg7dpKPm9fbzo_PDyGOxPZQ9R8ZklpvkKzam3mx4KI-vS-F3U75FeqvU5tjL_x8VWXtxWCfHCja4jDSflO2eInMjGMIkhhF64QqDq6MnZiZJHL5Tp8Jj4HRVTzPFQuWpec4ZoAE2Y0R=w704-h470-no?authuser=0" className='design-photo' alt=''/>
      </div>
      <div className='body-holder'>
        <div className='paragraph-holder'>
          <h2 className='title'>FEATURES</h2>
          <p>We can give you the soothing sound of a waterfall or the romantic look of night lighting. Drip irrigation can be installed to help your new trees and gardens flourish.</p>
          <p>From Japanese gardens, Mexican stonework, putting greens, sport field or a hot tub pad, we can do whatever you desire to make your outdoor living space complete.</p>
        </div>
        <img src= "https://lh3.googleusercontent.com/pw/AM-JKLU9wbbmgSiymk-oV2kMhJQogmXUvvnxCiwTArO1AWIlW6w2S1-tz9D9oQQ3AHLNHKDgYPRyPhEm8o-CgrBbAVJEMeu1f-cVUESC_fubWroA65FSkTTV-2R9X9FKviAgBgeJEH3MqoW-XNhbr1MPa4m4=w526-h789-no?authuser=0" className='design-photo' id="bottom-photo" alt=''/>
      </div>
    </div>
  );
}

export default Design;