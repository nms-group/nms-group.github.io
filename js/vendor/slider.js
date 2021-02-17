window.onload = function() {
 let carousel = document.querySelector('.content-section-banner'),
  /* Carousel current image */
 cimage = 0,
  /* Carousel source images */
 csources = [
     'img/slider/slider_1.jpg',
     'img/slider/slider_2.jpg',
     'img/slider/slider_3.jpg'
 ];

let dots = document.querySelector('.slider-dots ul');

  function changeDots(num) {
    dots.children[num].style.width = 9 + 'px';
    dots.children[num].style.height = 9 + 'px';
    dots.children[num].style.border = "2px solid #A3A3A3";
  }

  function changeCarouselImage() {
    // Reset the current image if it's ultrapassing the length - 1
    if(cimage >= 3) cimage = 0;
    // Change the source image
    carousel.style.background = 'url(' + csources[cimage ++] + ')'
    // Re-call the function after 5s
    setTimeout(changeCarouselImage, 5000);
 }

 setTimeout(changeCarouselImage, 5000);
};








