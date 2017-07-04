$(document).ready(function() {
    ////////////////////////////////////////////////
    ///////  OVERLAY
    ///////////////////////////////////////////////
    function startOverlay(id){

      // SHOW veil
        $('.overlay-veil').fadeTo("500","0.8",function(){
            var element = $('div[data-overlayItem="' + id + '"]');

            element.fadeIn("300");
            element.addClass('active');
        });
    }

    function closeAllOverlays(overlayId){
        $('.overlay-component').each(function(){
            if($(this).hasClass('active')){
                $('.overlay-veil').fadeOut();
                $(this).fadeOut("300",function(){
                    $(this).removeClass('active');
                });
            }
        });
        if(overlayId !== false){
            startOverlay(overlayId);
        }
    }

    $('.closeOverlay').on('click',function(){
        closeAllOverlays(false)
    });

    $('.overlay-item-click').on('click',function(e){
        e.preventDefault();

        var overlayId = $(this).data("overlay");
        closeAllOverlays(overlayId);
    });

});