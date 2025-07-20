$(document).ready(function() {

$(".more").click(function(e) {
    e.preventDefault();
    $(this).parent().parent().toggleClass("is-expanded is-hidden");
});

$(".less").click(function(e) {
    e.preventDefault();
    $(this).parent().parent().toggleClass("is-expanded is-hidden");
});

});