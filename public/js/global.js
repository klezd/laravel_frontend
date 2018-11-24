var cartIcon;
function sideChange() {
    cartIcon = document.getElementById("shopping-cart");
    if( $(window).width() >= 768) {
        cartIcon.addEventListener("mouseover", showShoppingcart);
        cartIcon.addEventListener("mouseleave", hideShoppingcart);        
        cartIcon.removeEventListener("click", showShoppingcart);
    } else {
        cartIcon.addEventListener("click", showShoppingcart);        
        cartIcon.removeEventListener("mouseover", showShoppingcart);
        cartIcon.removeEventListener("mouseleave", hideShoppingcart);        
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
    console.log("show shopping cart");

    /** Check if the cart is opening for mobile view */
    if( $(window).width() < 768) {
        // TODO check if cartIcon contains class show to remove or open
    }

    /** Check if the cart is opening for desktop view */
    if( $(window).width() >= 768) {
        // TODO if cartIcon has class show so don't add class
    }

    // AJAX call or cache data
}

var hideShoppingcart = function() {
    console.log("hide shopping cart");
}