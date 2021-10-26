

import '../routes/gallery/gallery.css';
import React from 'react';
import left from '../photos/left.png';
import right from '../photos/right.png';

// const handleDragStart = (e) => e.preventDefault();


const Carousel = () => {
  return (
    <div className='carousel-holder'>
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active circle"></li>
          <li data-target="#carouselExampleIndicators" className='circle' data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" class="circle" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" class="circle" data-slide-to="3"></li>
          <li data-target="#carouselExampleIndicators" class="circle" data-slide-to="4"></li>
          <li data-target="#carouselExampleIndicators" class="circle" data-slide-to="5"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100"
              src="https://lh3.googleusercontent.com/pw/AM-JKLXiCkx5x-crPz653YcUuVElAAal_wODwGGui-_dScIPJC7pRUjtz8DrdnRnPQWH4W1osRIUwIxp4JeLOnfMYAGoEtch36OZlTcjR54giUkGWT6h0Ufp2sy2ETPZNKg3u76LKvFj4TBIH_b6k1piEvqR=w727-h485-no?authuser=0"
              alt="First slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100"
              src="https://lh3.googleusercontent.com/pw/AM-JKLURytKXvuUkLyZTpTl7rGqYZCmzTvo0QOYFp9SkShxgVHb_JHnymcxDT3txYEsTl9r3GVfRNFsWEkHpc8gRik1VTxLtGIsOoAUrf6DCEfsDPW4qtT6xqAnjLWWJ0xKi_88ITBFly6k1njefcBrCgkKd=w727-h485-no?authuser=0"
              alt="Second slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100"
              src="https://lh3.googleusercontent.com/pw/AM-JKLUj36oI_k65c60F6_uVHU0nOshN2X_J5pNiE_gQJ5i9NWBBcT6NA-IsCXhb8EhtBXfNZVk0lI__ElRVstW7UWXp7B5JNGkr4l5FW8EMwyqhPOuRoobVSPfqvdy0ElguA37SRAqVWF78AZv79JAmwXAy=w727-h485-no?authuser=0"
              alt="Third slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100"
              src="https://lh3.googleusercontent.com/pw/AM-JKLVHtRvjcVrfA-OR1D1OhFHKjDIWfqRipr925sGHMy3OFV8xXHK_9wjlAd9sqG-BUSm7sB1fOagMLweu-3RVQ7wB8UScM8nFjROUtVNdWnYhShWjQGdirGx--nhDi7eybjfKyKjWBv-iYVoIbJocDz7H=w727-h485-no?authuser=0"
              alt="fourth slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100"
              src="https://lh3.googleusercontent.com/pw/AM-JKLW7CcwIpz9Eza4ZYrBOmbcJavRZZX1mvrnr4iIyYatXwuVdSA_jt6s9fRECisJDUHhfOAqF6CbR-WzfW9011A7wtHtbEh_lqkTuHQ_mHmO7QIN4WLTat7C0zDsqL0tcMCXXI19fik49T_3_NTC63q1E=w727-h485-no?authuser=0"
              alt="fifth slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100"
              src="https://lh3.googleusercontent.com/pw/AM-JKLVjcXFSCm9me71If7wdugzcPqyJKQQnfOMDBpKcUzcxQ-wWpcFClufSPi4g9pNxKkClJVXoV7My6i08pACHP_EfEbsRvDHQJhQb6a4XDg0Ix-FTDp_HtMe76wiTLT9r_YsmzDMT94ZWY5oPrkmcGJq0=w727-h485-no?authuser=0"
              alt="Sixth slide" />
          </div>
        </div>

        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true">
            <input class='arrow' type="image" alt="left arrow" src={left} />
          </span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true">
            <input class='arrow' type="image" alt="right arrow" src={right} />
          </span>
        </a>
      </div>
    </div>
  );
}


export default Carousel;

// autoPlay = 'false' autoPlayInterval = '4000'