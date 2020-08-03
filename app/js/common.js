$('.main-home__slider').slick({
    slidesToShow: 1,
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    fade: true
});


$('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        focusOnSelect: true,
        infinite: false,
        asNavFor: '.product-section__image_slider_max',
    });

$('.product-section__image_slider_max').slick({
    slidesToShow: 1,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    asNavFor: '.slider-nav',
    infinite: false,
    useTransform: true,
});


$('.product-gallery').fancybox();


$('.down').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
});
$('.up').click(function () {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
});

$('.btn-dropDown__phone').click(function (e) {
    e.preventDefault();
    $('.header__box_dropdown').slideToggle();
});

$('.btn-burger').click(function () {
    $('.overlay').fadeIn();
    $('.mobile-menu').fadeIn();
});

$('.mobile-menu .btn-close__menu').click(function () {
    $('.mobile-menu').fadeOut();
    $('.overlay').fadeOut();
});

$('.btn__mobile_catalog').click(function (e) {
    e.preventDefault();
    $('.overlay').fadeIn();
    $('.header__bottom').fadeIn();
});

$('.header__bottom .btn-close__menu').click(function () {
    $('.header__bottom').fadeOut();
    $('.overlay').fadeOut();
});

$('.menu__fixed_search').click(function (e) {
    e.preventDefault();
    $('.form-search__mobile').fadeToggle();
});

$('.btn_filter').click(function (e) {
    e.preventDefault();
    $('.overlay').fadeIn();
    $('.sidebar').fadeIn();
});

$('.sidebar .btn-close__menu').click(function (e) {
    e.preventDefault();
    $('.sidebar').fadeOut();
    $('.overlay').fadeOut();
});

$('.btn_sort').click(function (e) {
    e.preventDefault();
    $('.overlay').fadeIn();
    $('.sorting-wrapper').fadeIn();
});

$('.sorting-wrapper .btn-close__menu').click(function (e) {
    e.preventDefault();
    $('.sorting-wrapper').fadeOut();
    $('.overlay').fadeOut();
});

$('.btn-menu__cabinet').click(function () {
    $('.overlay').fadeIn();
    $('.cabinet-sidebar').fadeIn();
});

$('.cabinet-sidebar .btn-close__menu').click(function () {
    $('.cabinet-sidebar').fadeOut();
    $('.overlay').fadeOut();
});

$('.cabinet-sidebar li a').each(function () {
    var location = window.location.href;
    var link = this.href;
    if (location == link) {
        $(this).addClass('active');
    }
});

$('input[type="file"]').change(function(){
    var value = $("input[type='file']").val();
    $('.js-value').text(value);
});

$('.profile-info__manager_line').click(function () {
    $(this).siblings('.block__hidden_manager').slideToggle();
})

$(".datepicker").datepicker($.datepicker.regional["ru"]);

$("#buy_price").slider({
    range: true,
    animate: "fast",
    min: 0, // минимальное значение цены
    max: 50000, // максимальное значение цены
    step: 1, // шаг слайдера
    values: [0, 5000],  // начальные значения - позиции ползунков на шкале

    slide: function (event, ui) {
        $("input[name=price_s]").val(ui.values[0]); // выводим  значение от
        $("input[name=price_f]").val(ui.values[1]); // выводим  значение до
    },
});


// input search
$(function () {
    $('.form-search input').keydown(checkInput).keyup(checkInput);
});

function checkInput() {
    if ($('.form-search input').val() === "") {
        $('.search__result').fadeIn();
    } else {
        $('.search__result').fadeOut();
    }
}

$('[name=phone]').mask('+7 (999) 999 - 99 - 99');

$('ul.tabs__caption').on('click', 'li:not(.active)', function () {
    $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
});

$('.filter__box_header').click(function () {
    $(this).parents('.filter__box').toggleClass('open');
});

// модальные окна
$(document).ready(function () {
    var overlay = $('.overlay');
    var open_modal = $('.open_modal');
    var close = $('.modal__close, .overlay');
    var modal = $('.modal__div');

    open_modal.click(function (event) {
        event.preventDefault();
        var div = $(this).attr('href');
        overlay.fadeIn(400,
            function () {
                $(div)
                    .css('display', 'flex')
                    .animate({
                        opacity: 1,
                        top: '50%'
                    }, 200);
            });
    });

    close.click(function () {
        modal
            .animate({
                    opacity: 0,
                    top: '45%'
                }, 200,
                function () {
                    $(this).css('display', 'none');
                    overlay.fadeOut(400);
                }
            );
    });
});
//end


