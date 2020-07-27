$('.main-home__slider').slick({
    slidesToShow: 1,
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    fade: true
});

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

$('.btn-close__menu, .overlay').click(function () {
    $('.mobile-menu, .header__bottom').fadeOut();
    $('.overlay').fadeOut();
});

$('.btn__mobile_catalog').click(function (e) {
    e.preventDefault();
    $('.overlay').fadeIn();
    $('.header__bottom').fadeIn();
});

$('.menu__fixed_search').click(function (e) {
    e.preventDefault();
    $('.form-search__mobile').fadeToggle();
});


// input search
$(function () {
    $('.form-search input').keydown(checkInput).keyup(checkInput);
});

function checkInput() {
    if ($('.form-search input').val() == "") {
        $('.search__result').fadeIn();
    } else {
        $('.search__result').fadeOut();
    }
}