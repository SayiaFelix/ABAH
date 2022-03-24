$(".section").hide();

$(".lifestyle").click(function() {
    $(".section").show();
})

$(".one").click(function() {

    $(".profile1").toggle();
})

$(".two").click(function() {

    $(".profile2").toggle();
})

$(".three").click(function() {

    $(".profile3").toggle();
})

$(".four").click(function() {

    $(".profile4").toggle();
})

$(".five").click(function() {

    $(".profile5").toggle();
})

$(".six").click(function() {
    $("#influencers").show();
    $(".profile6").toggle();
})

// MialChimp section

(function($) {
    window.fnames = new Array();
    window.ftypes = new Array();
    fnames[0] = 'EMAIL';
    ftypes[0] = 'email';
    fnames[1] = 'FNAME';
    ftypes[1] = 'text';
    fnames[2] = 'LNAME';
    ftypes[2] = 'text';
    fnames[3] = 'ADDRESS';
    ftypes[3] = 'address';
    fnames[4] = 'PHONE';
    ftypes[4] = 'phone';
    fnames[5] = 'BIRTHDAY';
    ftypes[5] = 'birthday';
    fnames[6] = 'MMERGE6';
    ftypes[6] = 'birthday';
    fnames[7] = 'MMERGE7';
    ftypes[7] = 'text';
}(jQuery));
var $mcj = jQuery.noConflict(true);