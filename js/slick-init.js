$(document).ready(function () {
  locationSlider();
  customerSlider();
  instagramSlider();
});

function locationSlider() {
  $('.location__slides').slick({
    infinite: true,

    nextArrow: document.querySelector('#slick-next'),
    prevArrow: document.querySelector('#slick-prev'),
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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

function instagramSlider() {
  $('.social__instagram').slick({
    infinite: true,
    arrows: false,
    dots: false,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 1440,
        settings: 'unslick',
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
}
