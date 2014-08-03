var pixelRatio = !!window.devicePixelRatio ? window.devicePixelRatio : 1;
$(window).on("load", function() {
    if (pixelRatio > 1) {
        $('.logo-img').attr('src', $('.logo-img').attr('src').replace(".png","@2x.png"));
        $('body').addClass('retina');
    }
});

$(function () {
    var images = [
        'images/bg@2x.jpg',
    ];

    var src = [
        'body',
    ];

    $.preload(('images/bg@2x.jpg'), function(last){
        if($(src[0]).length > 0){
            $(src[0]).css("backgroundImage", "url('"+this+"')");
        }
    });

    $.preload(('images/logo@2x.png'), function(last){
        if($(src[1]).length > 0){
            $(src[1]).css("backgroundImage", "url('"+this+"')");
        }
    });




    $('#apply-contact-form').on('click', function () {
        if ($("#contact-page-form").valid()) {
            $("#apply-contact-form").replaceWith("<div class='loading'style='text-align:center;'><em>Applying...&nbsp;</em></div>");

            $.ajax({
                type: 'POST',
                url: 'mail.php',
                data: $("#contact-page-form").serialize(),
                success: function (data) {
                    $( "#alert" ).show();
                    $( '#alert' ).html( "Thank you for contact with us!" );
                    $('.contact-slide').css("paddingBottom", "180px");
                    $('#book').modal('hide');
                    $('#alert').delay(1500).fadeOut();

                },
                error: function(){
                    $(".loading").replaceWith("<div class='loading'style='text-align:center; color:#ffae00;'><em>Message did not sent! Error.</em></div>");
                }
            });

        }
    });

});







