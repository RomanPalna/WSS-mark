$(document).ready(function () {
  locationSlider();
  customerSlider();
});

function locationSlider() {
  $('.location__slides').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,

    nextArrow: document.querySelector('#slick-prev'),
    prevArrow: document.querySelector('#slick-next'),
  });
}

function customerSlider() {
  $('.customer__quote--slider').slick({
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    dots: true,
    customPaging: function (slider, i) {
      return '<div class="custom-slick-dots" id=' + i + '></div>';
    },
  });
}
