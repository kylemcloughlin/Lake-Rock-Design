
import React from 'react';
import '../../styles/gallery.css';
import PhotoGallery from 'react-grid-gallery';
// const images = [
//   {
//     original: 'https://picsum.photos/id/1018/1000/600/',
//     thumbnail: 'https://picsum.photos/id/1018/250/150/',
//   },
//   {
//     original: 'https://picsum.photos/id/1015/1000/600/',
//     thumbnail: 'https://picsum.photos/id/1015/250/150/',
//   },
//   {
//     original: 'https://picsum.photos/id/1019/1000/600/',
//     thumbnail: 'https://picsum.photos/id/1019/250/150/',
//   },
// ];

const IMAGES =
      [{
            src: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
            thumbnailWidth: 320,
            thumbnailHeight: 174,
            caption: "After Rain (Jeshu John - designerspics.com)"
      },
      {
            src: "https://picsum.photos/id/1015/1000/600/",
            thumbnail: "https://picsum.photos/id/1015/250/150/",
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: "Boats (Jeshu John - designerspics.com)"
      },

      {
            src: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
            thumbnailWidth: 320,
            thumbnailHeight: 212
      }, {
            src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
            thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 174,
            caption: "After Rain (Jeshu John - designerspics.com)"
      },
      {
            src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
            thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: "Boats (Jeshu John - designerspics.com)"
      },

      {
            src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
            thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212
      },
      {
            src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
            thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 174,
            caption: "After Rain (Jeshu John - designerspics.com)"
      },
      {
            src: "https://c6.staticflickr.com/9/8890/28897154101_a8f55be225_b.jpg",
            thumbnail: "https://c6.staticflickr.com/9/8890/28897154101_a8f55be225_n.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 183,
            caption: "37H (gratispgraphy.com)"
      },
      {
            src: "https://c7.staticflickr.com/9/8106/28941228886_86d1450016_b.jpg",
            thumbnail: "https://c7.staticflickr.com/9/8106/28941228886_86d1450016_n.jpg",
            thumbnailWidth: 271,
            thumbnailHeight: 320,
            caption: "Orange Macro (Tom Eversley - isorepublic.com)"
      },
      {
            src: "https://c6.staticflickr.com/9/8342/28897193381_800db6419e_b.jpg",
            thumbnail: "https://c6.staticflickr.com/9/8342/28897193381_800db6419e_n.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 213,
            caption: "201H (gratisography.com)"
      },
      {
            src: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_b.jpg",
            thumbnail: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_n.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 213,
            caption: "Flower Interior Macro (Tom Eversley - isorepublic.com)"
      },
      {
            src: "https://c1.staticflickr.com/9/8707/28868704912_cba5c6600e_b.jpg",
            thumbnail: "https://c1.staticflickr.com/9/8707/28868704912_cba5c6600e_n.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 213,
            caption: "Man on BMX (Tom Eversley - isorepublic.com)"
      },
      {
            src: "https://c4.staticflickr.com/9/8578/28357117603_97a8233cf5_b.jpg",
            thumbnail: "https://c4.staticflickr.com/9/8578/28357117603_97a8233cf5_n.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 213,
            caption: "Ropeman - Thailand (Tom Eversley - isorepublic.com)"
      },
      {
            src: "https://c1.staticflickr.com/9/8056/28354485944_148d6a5fc1_b.jpg",
            thumbnail: "https://c1.staticflickr.com/9/8056/28354485944_148d6a5fc1_n.jpg",
            thumbnailWidth: 257,
            thumbnailHeight: 320,
            caption: "A photo by 贝莉儿 NG. (unsplash.com)"
            }, {
                  src: "https://c5.staticflickr.com/9/8768/28941110956_b05ab588c1_b.jpg",
                  thumbnail: "https://c5.staticflickr.com/9/8768/28941110956_b05ab588c1_n.jpg",
                  thumbnailWidth: 240,
                  thumbnailHeight: 320,
                  caption: "8H (gratisography.com)"
            },
            {
                  src: "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_b.jpg",
                  thumbnail: "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_n.jpg",
                  thumbnailWidth: 320,
                  thumbnailHeight: 190,
                  caption: "286H (gratisography.com)"
            },
            {
                  src: "https://c7.staticflickr.com/9/8569/28941134686_d57273d933_b.jpg",
                  thumbnail: "https://c7.staticflickr.com/9/8569/28941134686_d57273d933_n.jpg",
                  thumbnailWidth: 320,
                  thumbnailHeight: 148,
                  caption: "315H (gratisography.com)"
            },
            {
                  src: "https://c6.staticflickr.com/9/8342/28897193381_800db6419e_b.jpg",
                  thumbnail: "https://c6.staticflickr.com/9/8342/28897193381_800db6419e_n.jpg",
                  thumbnailWidth: 320,
                  thumbnailHeight: 213,
                  caption: "201H (gratisography.com)"
            },
            {
                  src: "https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_b.jpg",
                  thumbnail: "https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_n.jpg",
                  thumbnailWidth: 248,
                  thumbnailHeight: 320,
                  caption: "Big Ben (Tom Eversley - isorepublic.com)"
            },
            {
                  src: "https://c7.staticflickr.com/9/8785/28687743710_3580fcb5f0_b.jpg",
                  thumbnail: "https://c7.staticflickr.com/9/8785/28687743710_3580fcb5f0_n.jpg",
                  thumbnailWidth: 320,
                  thumbnailHeight: 113,
                  caption: "Red Zone - Paris (Tom Eversley - isorepublic.com)",
            },
            {
                  src: "https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_b.jpg",
                  thumbnail: "https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_n.jpg",
                  thumbnailWidth: 313,
                  thumbnailHeight: 320,
                  caption: "Wood Glass (Tom Eversley - isorepublic.com)",
                  
            },
            {
                  src: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_b.jpg",
                  thumbnail: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_n.jpg",
                  thumbnailWidth: 320,
                  thumbnailHeight: 213,
                  caption: "Flower Interior Macro (Tom Eversley - isorepublic.com)",
                  
            }
      ]


const Gallery = () => {

      return (<div className='galler-wrapper'>
            <div className='lndscp-ttl'>
                        <h1>Photo Gallery</h1>
                  <p>Our qualified team will take your project from the design stage to completion in an organized, professional and timely manner. We specialize in water front and country properties.</p>
                  </div>

            <PhotoGallery images={IMAGES} />
      </div>)
}

export default Gallery;