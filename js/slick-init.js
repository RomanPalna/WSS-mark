$(document).ready(function () {
  $('.location__slides').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,

    nextArrow: document.querySelector('#slick-prev'),
    prevArrow: document.querySelector('#slick-next'),
  });
});
