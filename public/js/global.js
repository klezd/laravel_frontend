var cartIcon;
var cartInfo;
function sideChange() {
    cartIcon = document.getElementById("shopping-cart");
    if( $(window).width() >= 768) {
        cartIcon.addEventListener("mouseenter", showShoppingcart);
        cartIcon.addEventListener("mouseleave", hideShoppingcart);        
        cartIcon.removeEventListener("click", showShoppingcart);
    } else {
        cartIcon.addEventListener("click", showShoppingcart);  
        cartIcon.removeEventListener("mouseenter", showShoppingcart);
        cartIcon.removeEventListener("mouseleave", hideShoppingcart);        
    }
}

$(document).ready(function() {
    $('span.subscribe-loading').hide();
    ajaxCallLoadCart(); //load cart for once 
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

var showShoppingcart = function(e) {
    console.log("show shopping cart");
    cartInfo = document.getElementById("shopping-cart-info");
    /** Check if the cart is opening for mobile view */
    if( $(window).width() < 768) {
        // TODO check if cartIcon contains class show to remove or open
        if (cartInfo.className.split(" ").indexOf('show') == -1) { // for cross browser
            cartInfo.className += " " + 'show';
            cartIcon.className = cartIcon.className.replace(/\bdesktop\b/g, "");
            ajaxCallLoadCart();
        } else {
            // if cartInfo has class show, hide
            hideShoppingcart();
        }
    }

    /** Check if the cart is opening for desktop view */
    if( $(window).width() >= 768) {
        // check if cartIcon has class show 
        if (cartInfo.className.split(" ").indexOf('show') == -1) { // for cross browser
            cartInfo.className += " " + 'show';
            if (cartIcon.className.split(" ").indexOf('desktop') == -1) { // for cross browser
                cartIcon.className += " " + 'desktop';
            }
            ajaxCallLoadCart();
        }
    }

}

// AJAX call or cache data
var ajaxCallLoadCart = function() {
    $.ajax({
        url: 'cart/get',
        method: 'GET',
        dataType: 'json',
        cache: true,
        header: {"cache-control": "max-age: 60, private"}
    });
    $.ajaxSetup({
        beforeSend: function() {
            console.log('loading');
            $('table.info-table').append(
                '<tr>' + '<td class="text-loading"><span>' +
                '<i class="fa fa-spinner"></i> Loading cart'+
                '</span></td></tr>');
        },
        complete: function() {
            $('table.info-table').empty();
        },
        success: function() {
            loadCartDataToView();
        }

    })
}

var loadCartDataToView = function() {}

var hideShoppingcart = function(e) {
    cartInfo = document.getElementById("shopping-cart-info")
    console.log("hide shopping cart");
    cartInfo.className = cartInfo.className.replace(/\bshow\b/g, "");
}

//TODO 25.11
/**
 * - add cache
 * - add btn and daat to view
 */