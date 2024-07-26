const prevArrow =
  '<button class="btn p-2 slick-prev"><i class="material-icons">arrow_back</i></button>';
const nextArrow =
  '<button class="btn p-2 slick-next"><i class="material-icons">arrow_forward</i></button>';

$(document).ready(function () {
  $('.banner__slide').slick({
    prevArrow:
      '<button class="btn p-2 slick-prev"><i class="material-icons">arrow_back_ios</i></button>',
    nextArrow:
      '<button class="btn p-2 slick-next"><i class="material-icons">arrow_forward_ios</i></button>',
  });

  $('.course-slider, .event-slider, .industry-placement__slider').slick({
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: false,
    lazyLoad: true,
    prevArrow: prevArrow,
    nextArrow: nextArrow,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $('.client__slider').slick({
    autoplay: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    infinite: true,
    lazyLoad: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  });

  $('.testimonial__slider').slick({
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    lazyLoad: true,
    infinite: true,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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

  // autoplay video on modal open
  $('#videoModal').on('show.bs.modal', function () {
    let iframe = $(this).find('iframe');
    let videoSrc = iframe.data('src');
    $('#videoModal iframe').attr('src', videoSrc + '&amp;autoplay=1');
  });

  // stop/remove video on modal close
  $('#videoModal').on('hidden.bs.modal', function () {
    $('#videoModal iframe').attr('src', '');
  });
});
