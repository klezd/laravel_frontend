var cartIcon;
var cartInfo;
var cartSum;

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
    sideChange();
    $('span.subscribe-loading').hide(); // hide the loading span of newsletter subscribe
    ajaxCallLoadCart(); //load cart for once 
});

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
    console.log("load cart");
    $.ajaxSetup({
        beforeSend: function() {
            $("#info-table").empty();
        },
        success: function(data) {
            loadCartDataToView(data);
        }
    });
    $.ajax({
        url: 'cart/get',
        method: 'GET',
        dataType: 'json',
        cache: true,
        headers: {
            'Cache-Control': 'max-age= 60',
            'Cache-Control': 'private'
        }
    });
}

var loadCartDataToView = function(data) {
    cartSum = document.getElementById("cart-sum");
    var table = document.getElementById("info-table");
    var itemsInCart = data.items;
    console.log(data);
    cartSum.innerHTML = data.totalItems + " item(s) in your cart: <b>&#8364;" + data.totalPrice + "</b>";
    for ( var i = 0; i < itemsInCart.length; i ++ ) {
        var firsttr = document.createElement("tr"),
            secondtr = document.createElement("tr");
        firsttr.className += "product-in-cart";
        secondtr.className += "product-in-cart";
        firsttr.innerHTML = "<td width='30%' rowspan='2' class='product-in-cart-cell-row-2'><img src="+ itemsInCart[i].imgSrc +"></td>" + 
                            "<th width='50%'>" + itemsInCart[i].name + "</th>" +
                            "<td width='20%' rowspan='2' class='product-in-cart-cell-row-2'><i class='fa fa-times'></i></td>";
        secondtr.innerHTML = "<td>" + itemsInCart[i].qty + " <i class='fa fa-times'></i> &#8364;" + itemsInCart[i].price + "</td>";
        table.appendChild(firsttr); table.appendChild(secondtr);
    }
    /*
    <tr class="product-in-cart">
        <td width='30%' rowspan='2' class='product-in-cart-cell-row-2'><img src='img/products/scarf.jpg'></td>
        <th width='50%'>Scarf</th>
        <td width='20%' rowspan='2' class='product-in-cart-cell-row-2'><i class='fa fa-times'></i></td>
    </tr>
    <tr class="product-in-cart">
        <td> 2 <i class='fa fa-times'></i> &#8364; 59.00</td>
    </tr>
    <tr class="checkout-btn">
        <td colspan="3"><a class="primary-btn">Checkout</a></td>
    </tr>*/
}

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