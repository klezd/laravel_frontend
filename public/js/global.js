$(document).ready(function() {
    sideChange();
    $('span.subscribe-loading').hide(); // hide the loading span of newsletter subscribe
    ajaxCallLoadCart(); //load cart for once 
});

// observe if the nav is openning and cart is openning
var mainNavBar = document.getElementById("main-navbar");
var cart = document.getElementById("shopping-cart-info");
var observer = new MutationObserver(function (mutList, observer) {
    for ( var obj of mutList) {
        console.log(obj);
        if (obj.target.id == "shopping-cart-info") {
            if (obj.target.className.includes('show')) { // if shopping cart is shown,so close the main nav
                if(mainNavBar.className.includes('show')) {
                    mainNavBar.className.replace(/\bshow\b/g, "");
                }
            }   
        }
        if (obj.target.id == "main-navbar") {
            if (obj.target.className.includes('show')) { // if nav is shown,so close the cart
                cart.className.replace(/\bshow\b/g, "");
                break;
            }   
        }
    }
})

var config = {
    attributes: true, 
    attributeFilter: ['class'],
    childList: false, 
    characterData: false
}
observer.observe(mainNavBar, config);
observer.observe(cart, config);