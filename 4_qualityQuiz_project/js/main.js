$(document).ready(function() {

    (function startQuiz(){

        this.settings = {
            quizN:''
        };

        this.init = function(){
            loadQuiz();
        };

        this.loadQuiz = function(){
            $('.panel_one h1').show("drop",500,function(){
              $('.start_quiz').addClass("started",500)
            });

            $('.start_quiz').on("click",function(){
                showPanel(0)
            });
        };


        this.showPanel = function(position){

            var current =  $('div[data-panel="'+ position +'"]');


            current.find('.wrapper').animate({left:"-=100px",opacity:0},500,function(){
                //hide current
                current.addClass('hidden');

                // SHow next
                var next = $('div[data-panel="'+ (position + 1 )+'"]');
                next.removeClass('hidden');

                // show wrapper


            })


        };



        init();
    })();

});