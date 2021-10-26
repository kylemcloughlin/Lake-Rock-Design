
import React from 'react';
import './gallery.css';
import PhotoGallery from 'react-grid-gallery';
import {Helmet} from 'react-helmet';
import galleryLogic from  './galleryLogic.js';

const Gallery = () => {
let { IMAGES } = galleryLogic();
      return (<div className='galler-wrapper'>
            <Helmet>
                  <title>Past Work - Landscaping, Garden Centre, Rock Gardens, Apsley Ontario</title>
                  <meta name="description" content="Our qualified team will take your project from the design stage to completion in an organized, professional and timely manner. We specialize in water front and country properties." />
                  <meta name="keywords" content="Landscaping, Landscaping Material,Garden Centre, Rock Gardens, Apsley Ontario" />
            </Helmet>
            <div className='lndscp-ttl'>
                  <h1>Photo Gallery</h1>
                  <p>Our qualified team will take your project from the design stage to completion in an organized, professional and timely manner. We specialize in water front and country properties.</p>
            </div>

            <PhotoGallery images={IMAGES} />
      </div>)
}

export default Gallery;