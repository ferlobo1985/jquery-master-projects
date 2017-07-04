

$(document).ready(function() {

    ////////////////////////////////////////////////
    ///////  TABS
    ///////////////////////////////////////////////


    $('.tab_header .item').on("click",function(){
        var number = $(this).data("option");

        // Remove all actives
        $('.tab_header .item').removeClass('active');

        // Add active to current
        $(this).addClass('active');

        // Hide all containers
        $('.tab_container .container_item').hide();
        $('div[data-item="'+ number +'"]').show();
    });

    ////////////////////////////////////////////////
    ///////  CARD SLIDER
    ///////////////////////////////////////////////


    var itemsLenght = $('.cards_container .item').length;
    var current = 1;

    // SET LENGHT
    $('.total_slides').text(itemsLenght);

    $('.cardSlider .btn_prev').on("click",function(){
        if(current > 1){
            current = current - 1;
            showSlide(current);
        }else{
            current = itemsLenght;
            showSlide(current);
        }
    });

    $('.cardSlider .btn_next').on("click",function(){

        if(current !== itemsLenght){
            current = current + 1;
            showSlide(current);
        }else{
            current = 1;
            showSlide(current);
        }
    });


    function showSlide(slideNumber){
     $('.cards_container .item').removeClass('active');
     $('div[data-id="'+ slideNumber +'"]').addClass('active');

     $('.current_slide').text(slideNumber)

    }

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
                $(this).fadeOut();
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