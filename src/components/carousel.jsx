import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import '../styles/gallery.css';

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src="https://picsum.photos/id/1018/1000/600/" onDragStart={handleDragStart} role="presentation" />,
  <img src="https://picsum.photos/id/1019/1000/600/" onDragStart={handleDragStart} role="presentation" />,
  <img src="https://picsum.photos/id/1015/1000/600/" onDragStart={handleDragStart} role="presentation" />,
  <img src="https://picsum.photos/id/1018/1000/600/" onDragStart={handleDragStart} role="presentation" />,
  <img src="https://picsum.photos/id/1019/1000/600/" onDragStart={handleDragStart} role="presentation" />,
  <img src="https://picsum.photos/id/1015/1000/600/" onDragStart={handleDragStart} role="presentation" />,
];

const Carousel = () => {
  return (
    <div className='carousel-holder'>
      <AliceCarousel mouseTracking items={items} infinite='true' disableButtonsControls='true' autoPlay='true' autoPlayInterval='4000' paddingLeft='0' paddingRight='0' />
    </div>
  );
}


export default Carousel;

// autoPlay = 'false' autoPlayInterval = '4000'