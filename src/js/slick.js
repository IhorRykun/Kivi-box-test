import $ from 'jquery';
import "slick-carousel"

$('.carousel').slick({
  dots: false,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  autoplay: true,
  autoplaySpeed: 2000,
  infinite: true,
});
