function sideChange() {
    var cartIcon = document.getElementById("shopping-cart");
    if( $(window).width() >= 768) {
        cartIcon.onmouseover = function() {showShoppingcart()}
    } else {
        cartIcon.onclick = function() {showShoppingcart()}
    }
}

$(document).ready(function() {
    $('span.subscribe-loading').hide();
})
$('#newsletter-submit-form').submit(function(e) {
    // remove all status if re-enter email to subscribe
    $('span.res').remove();

    var form = $(this);
    var data = form.serialize();
    console.log((data));
    var url = form.attr('action');

    $.ajaxSetup({
        url: url,
        type: "POST",

        beforeSend: function() {
            console.log('loading');
            $('span.subscribe-loading').show();
        },
        complete: function(){
            $('span.subscribe-loading').hide();
        },
        success: function(res) {
            $("#sub-status").append(res.status);
        }
    });
    $.ajax({
        data: data,
        dataType: 'json',
    });
    e.preventDefault();
});

var showShoppingcart = function() {
    console.log("show shopping cart")
}