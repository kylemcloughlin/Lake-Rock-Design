
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
            src: 'https://lh3.googleusercontent.com/pw/AM-JKLVjcXFSCm9me71If7wdugzcPqyJKQQnfOMDBpKcUzcxQ-wWpcFClufSPi4g9pNxKkClJVXoV7My6i08pACHP_EfEbsRvDHQJhQb6a4XDg0Ix-FTDp_HtMe76wiTLT9r_YsmzDMT94ZWY5oPrkmcGJq0=w727-h485-no?authuser=0',
            thumbnail: 'https://lh3.googleusercontent.com/pw/AM-JKLWWOkxQ4ugrRGwwc9RAntXz9_2lzSbMPNpXAljWJmPmglQ6lVyGBgrTeGbfqWd_G0CovzouWnHarBPqpLER9XNIzQqQbvSjAaFC7rS-OQfUXEBJ1AjnrgdfIdLr-ZxD0Pk0y1uj8Hvs4VaXCJ8fASva=w588-h392-no?authuser=0',
            thumbnailWidth: 320,
            thumbnailHeight: 200,
            caption: ""
      },
      {
            src: "https://lh3.googleusercontent.com/pw/AM-JKLVTJn8mlsQXAGlDUSIom-xskIBP3YkiwnUkP_3Bs6njW6tUw-wTgeRNieeoNLHnHS3r3_SBEF_wKO7O2HjjS99S8T7b5uZ7UfXcAR5ShqwMKbLCITAqMD9SwD9GA3OyROkJ0JqjdVhyuKBjnEeFveq2=w526-h789-no?authuser=0",
            thumbnail: "https://lh3.googleusercontent.com/pw/AM-JKLVc579BBFJbEJyMibf4TnHmcsj35pYZ812qCUYaCyIYykVuG97sFU956A_PCY8le1YrUFAvsne_7me4wj1lNnCrSENejijDyniIrtVSy3A3PknqTWFzur8V15LN_ompr4eLxSxo15UmS7FUImozXIyd=w336-h504-no?authuser=0",
            thumbnailWidth: 212,
            thumbnailHeight: 320,
            caption: "Boats (Jeshu John - designerspics.com)"
      },

      {
            src: 'https://lh3.googleusercontent.com/pw/AM-JKLV0a154kKAoERZM3xmFMxQyq41liVkzhHJgrmIIAL3fI98h7C9l9YzxSiR0OvUQly19bwTXh96vZ6H1h3IAj1EaSsWfe3h7IIcQtAncsiz58o6Jdbb76-KoJlIGollBKtlKv2Utk7sNe0yVk4WT2EaF=w727-h485-no?authuser=0',
            thumbnail: 'https://lh3.googleusercontent.com/pw/AM-JKLXbXupmm4zpoQ8AvH90otxluHnz0yfyZhpXp78b11CvcX4Tj1s8ypSpvjRiUSvQ5LwiC0J69Sg_kKse6IQ-1-itbmaJE0FEMm_aWMkZbPPCL_CBCco_3cQfGKIOKLqFlaCRhnqMR53HI4fdQVcL-jLi=w400-h267-no?authuser=0',
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