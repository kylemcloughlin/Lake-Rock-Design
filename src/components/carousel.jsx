import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import '../styles/gallery.css';

const handleDragStart = (e) => e.preventDefault();



const items = [
  <img src="https://lh3.googleusercontent.com/pw/AM-JKLXiCkx5x-crPz653YcUuVElAAal_wODwGGui-_dScIPJC7pRUjtz8DrdnRnPQWH4W1osRIUwIxp4JeLOnfMYAGoEtch36OZlTcjR54giUkGWT6h0Ufp2sy2ETPZNKg3u76LKvFj4TBIH_b6k1piEvqR=w727-h485-no?authuser=0" alt="IMG-6459" onDragStart={handleDragStart} role="presentation" />,
  <img src="https://lh3.googleusercontent.com/pw/AM-JKLURytKXvuUkLyZTpTl7rGqYZCmzTvo0QOYFp9SkShxgVHb_JHnymcxDT3txYEsTl9r3GVfRNFsWEkHpc8gRik1VTxLtGIsOoAUrf6DCEfsDPW4qtT6xqAnjLWWJ0xKi_88ITBFly6k1njefcBrCgkKd=w727-h485-no?authuser=0" onDragStart={handleDragStart} role="presentation" />,
  <img src="https://lh3.googleusercontent.com/pw/AM-JKLUj36oI_k65c60F6_uVHU0nOshN2X_J5pNiE_gQJ5i9NWBBcT6NA-IsCXhb8EhtBXfNZVk0lI__ElRVstW7UWXp7B5JNGkr4l5FW8EMwyqhPOuRoobVSPfqvdy0ElguA37SRAqVWF78AZv79JAmwXAy=w727-h485-no?authuser=0" onDragStart={handleDragStart} role="presentation" />,
  <img src="https://lh3.googleusercontent.com/pw/AM-JKLVHtRvjcVrfA-OR1D1OhFHKjDIWfqRipr925sGHMy3OFV8xXHK_9wjlAd9sqG-BUSm7sB1fOagMLweu-3RVQ7wB8UScM8nFjROUtVNdWnYhShWjQGdirGx--nhDi7eybjfKyKjWBv-iYVoIbJocDz7H=w727-h485-no?authuser=0" onDragStart={handleDragStart} role="presentation" />,
  <img src="https://lh3.googleusercontent.com/pw/AM-JKLW7CcwIpz9Eza4ZYrBOmbcJavRZZX1mvrnr4iIyYatXwuVdSA_jt6s9fRECisJDUHhfOAqF6CbR-WzfW9011A7wtHtbEh_lqkTuHQ_mHmO7QIN4WLTat7C0zDsqL0tcMCXXI19fik49T_3_NTC63q1E=w727-h485-no?authuser=0" onDragStart={handleDragStart} role="presentation" />,
  <img src="https://lh3.googleusercontent.com/pw/AM-JKLVjcXFSCm9me71If7wdugzcPqyJKQQnfOMDBpKcUzcxQ-wWpcFClufSPi4g9pNxKkClJVXoV7My6i08pACHP_EfEbsRvDHQJhQb6a4XDg0Ix-FTDp_HtMe76wiTLT9r_YsmzDMT94ZWY5oPrkmcGJq0=w727-h485-no?authuser=0" onDragStart={handleDragStart} role="presentation" />,
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