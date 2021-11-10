$(document).ready(function () {
  $('.location__slides').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,

    nextArrow: document.querySelector('#slick-prev'),
    prevArrow: document.querySelector('#slick-next'),
  });
});

// customer__quote--slider

$(document).ready(function () {
  $('.customer__quote--slider').slick({
    infinite: true,
    nextArrow: false,
    prevArrow: false,
    slidesToShow: 1,
    dots: true,
    customPaging: function (slider, i) {
      return '<div class="custom-slick-dots" id=' + i + '></div>';
    },
  });
});
