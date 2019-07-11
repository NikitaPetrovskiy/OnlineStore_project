$(document).ready(function () {
    "use strict";

    $('.title_box').on('click', function () {
        $(this).toggleClass('open');
        $(this).next('.list_link').toggleClass('open');
    });

    $('#slider_price').slider({
        max: 1000,
        min: 0,
        range: true,
        values: [190, 728],
        slide: function (event, ui) {
         $('input[name="minPrice"]').val('$' + ui.values[0]);
         $('input[name="maxPrice"]').val('$' + ui.values[1]);
        }
    });
    $('input[name="minPrice"]').val('$' +
        $('#slider_price').slider('values', 0) );
    $('input[name="maxPrice"]').val('$' +
        $('#slider_price').slider('values', 1) );


    $('#cart, .title_cart').on('click', function () {
       $('#cart_box').toggleClass('open');
    });
    $('#sing').on('click', function () {
       $('#black_fill').toggleClass('open');
        $('#modal').toggleClass('open');
    });
    $('#close_modal, #black_fill').on('click', function () {
        $('#black_fill').toggleClass('open');
        $('#modal').toggleClass('open');
    });

});
