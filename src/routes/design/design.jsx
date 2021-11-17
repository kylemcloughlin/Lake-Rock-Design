import './design.css';
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
          <p>Our experienced team of landscape experts will take your project from planning to completion in a timely and professional fashion. We specialize in waterfront and country properties.</p>
          <p>Every property is different, and so is what you want. We provide detailed planning from beginning to end along with our material supply store so you can better keep track of what you are paying for and what to expect.</p>
        </div>
        <img src="https://lh3.googleusercontent.com/pw/AM-JKLU4j8WR-RQWehneoH1WpMqE-6iRDh4C9l1Nzjmn1dVPP6WMR2cQuGMceR4TAJZC1d7aKdUQeQOuUZyfbwYGKXPRJsTkAjlQhDpXYV9TrTsA61HWV0ADPM3xvn9yNhm2KLwB4kunULMxsM5YW11KfA0b=w704-h470-no?authuser=0" className='design-photo' alt=''/>
      </div>
      <div className='body-holder'>
        <div className='paragraph-holder'>
          <h2 className='title'>PLANTINGS</h2>
          <p>Creating a natural flow rather than a formal feel is always our goal. We specialize in finding the plants which thrive in the northern Kawartha's Zone 4 Hardiness and work best within other site-specific considerations.<b>We are tree and shrub experts and know what to plant where for lasting results.</b></p>
        </div>
        <img src="https://lh3.googleusercontent.com/pw/AM-JKLXSjFyWzHV6kMg7dpKPm9fbzo_PDyGOxPZQ9R8ZklpvkKzam3mx4KI-vS-F3U75FeqvU5tjL_x8VWXtxWCfHCja4jDSflO2eInMjGMIkhhF64QqDq6MnZiZJHL5Tp8Jj4HRVTzPFQuWpec4ZoAE2Y0R=w704-h470-no?authuser=0" className='design-photo' alt=''/>
      </div>
      <div className='body-holder'>
        <div className='paragraph-holder'>
          <h2 className='title'>FEATURES</h2>
          <p>No job is too big or small, we specialize in large and small scale features ranging from Drip irrigation, Stonework, Tree Planting and Retainment Walls.</p>
          <p>we can work with you to establish a solid plan and create whatever for in for making whatever your outdoor space dream come true.</p>
        </div>
        <img src= "https://lh3.googleusercontent.com/pw/AM-JKLU9wbbmgSiymk-oV2kMhJQogmXUvvnxCiwTArO1AWIlW6w2S1-tz9D9oQQ3AHLNHKDgYPRyPhEm8o-CgrBbAVJEMeu1f-cVUESC_fubWroA65FSkTTV-2R9X9FKviAgBgeJEH3MqoW-XNhbr1MPa4m4=w526-h789-no?authuser=0" className='design-photo' id="bottom-photo" alt=''/>
      </div>
    </div>
  );
}

export default Design;