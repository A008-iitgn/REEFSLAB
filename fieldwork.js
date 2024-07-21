// let angle = 0;
// const items = document.querySelectorAll('.carousel-item');
// const numItems = items.length;

// function rotateCarousel() {
//     const theta = 360 / numItems;
//     items.forEach((item, index) => {
//         const itemAngle = theta * index + angle;
//         item.style.transform = `rotateY(${itemAngle}deg) translateZ(400px)`;
//     });
// }

// function prev() {
//     angle -= 360 / numItems;
//     rotateCarousel();
// }

// function next() {
//     angle += 360 / numItems;
//     rotateCarousel();
// }

// rotateCarousel();
const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 30,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // responsive breakpoints
    breakpoints:{
        0: {
            slidesPerView:1
        },
        768:{
            slidesPerView:2
        },
        1024:{
            slidesPerView:3
        }
    }
  
  });