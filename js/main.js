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

    $('#search_button').on('click', function () {
       $('#search_bar').toggleClass('open');
    });
    $('#load_more').on('click', function (e) {
        e.preventDefault();
        $('.list_product').append(`
            <a class="product box anime main_flex__nowrap flex__jcontent_center flex__align-items_center">
                <div class="tag box">
                    new
                </div>
                <div class="img_product">
                    <img src="images/hoodie1.jpg" alt="">
                </div>
                <h2>Primitive x Rick & Morty Morty Vortex Hoodie</h2>
                <p class="price">$55</p>
            </a>

            <a class="product box anime main_flex__nowrap flex__jcontent_center flex__align-items_center">
                <div class="img_product">
                    <img src="images/shitrt3.jpg" alt="">
                </div>
                <h2>Alltimers Future Spill Logo T-Shirt</h2>
                <p class="price">$30</p>
            </a>
            <a class="product box anime main_flex__nowrap flex__jcontent_center flex__align-items_center">
                <div class="tag box sale">
                    sale
                </div>
                <div class="img_product">
                    <img src="images/hoodie3.jpg" alt="">
                </div>
                <h2>Santa Cruz Skateboarding Is Not A Crime Hoodie</h2>
                <p class="price pr_sale">$44 <span class="price_through"> $56</span></p>
            </a>`)
    });
});
