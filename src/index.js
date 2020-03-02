import '@/styles.scss'
import * as $ from 'jquery'

$(document).ready(() => {
  fixHeader($(window).scrollTop(), $('#intro').innerHeight());
  setFixedHeader();
  setSmoothScroll();

  $('#menuButton').click(function (event) {
    event.preventDefault();
    $('#nav').toggleClass('nav--show')
  })
});

function fixHeader (scroll, height) {
  const header = $('#header');
  if (scroll > height)  {
    header.addClass('header--fixed')
  } else {
    header.removeClass('header--fixed')
  }

}
function setFixedHeader () {
  $(window).on('scroll', function () {
    fixHeader($(this).scrollTop(), $('#intro').innerHeight())
  })
}

function setSmoothScroll () {
  $('[data-scroll]').on('click', function (event) {
    event.preventDefault();
    const elementId = $(this).data('scroll');
    const elementOffset = $(elementId).offset().top;
    $('#nav').toggleClass('nav--show');
    $('html, body').animate({
      scrollTop: elementOffset-80,
      easing: 'swing'
    })
  })
}
