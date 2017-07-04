$(document).ready(function() {

    ////////////////////////////////////////////////
    ///////  CARD SLIDER
    ///////////////////////////////////////////////
    var itemsLenght = $('.cards_container .item').length;
    var current = 1;

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

});