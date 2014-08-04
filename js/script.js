var pixelRatio = !!window.devicePixelRatio ? window.devicePixelRatio : 1;
$(window).on("load", function() {
    if (pixelRatio > 1) {
        $('.logo-img').attr('src', $('.logo-img').attr('src').replace(".png","@2x.png"));
        $('body').addClass('retina');
    }
});

$(function () {

    $('#booknow').click(function () {
        $('form')[0].reset();

        $(':input','#contact-page-form')
            .not(':button, :submit, :reset, :hidden')
            .val('')
            .removeAttr('checked')
            .removeAttr('selected');
        $('.error-block').hide();

    });

    $('#apply-contact-form').click(function () {
        $('.error-block').show();
    });

    $('#contact-page-form').validate(
        {
            rules: {
                name: {
                    minlength: 2,
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                comments: {
                    minlength: 15,
                    required: true
                }
            },
            highlight: function (element) {
                $(element).closest('.form-group').removeClass('success').children(".help-block");
            },
            errorPlacement: function (error, element) {
                error.appendTo(element.closest(".form-group").children(".error-block"));
            }
        });



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







