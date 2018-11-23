function sideChange() {
    /*console.log('sideChange');
    if( $(window).width() > 768) {
        console.log('larger');
        $('#navbar').hasClass('fixed-top') ? $('#navbar').removeClass('fixed-top') : {}
    } else {
        $('#navbar').hasClass('fixed-top') ? {} : $('#navbar').addClass('fixed-top')
    }*/
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