var pixelRatio = !!window.devicePixelRatio ? window.devicePixelRatio : 1;
$(window).on("load", function() {
    if (pixelRatio > 1) {
//        $('#logo-img').attr('src', $('#logo-img').attr('src').replace(".png","@2x.png"));
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

});







