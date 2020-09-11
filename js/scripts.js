$(function () {
  'use strict';

  $('.logo img').addClass('activo')

  $('.navegacion').show()

  $('main article:first').addClass('activo')

  $('.navegacion ul li a').on('click', function(e){
    e.preventDefault();
  })

})
