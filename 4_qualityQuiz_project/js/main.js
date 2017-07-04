$(document).ready(function() {

    (function startQuiz(){

        this.settings = {
            quizN:''
        };

        this.init = function(){
            loadQuiz();
        };

        this.loadQuiz = function(){

            $('.panel_one').show();

            $('.panel_one h1').show("drop",500,function(){
              $('.start_quiz').addClass("started",500)
            });
            $('.start_quiz').on("click",function(){
                showPanel(1)
            });
        };


        this.showPanel = function(position){
            var current =  $('div[data-panel="'+ (position - 1) +'"]');

            current.find('.wrapper').animate({left:"-=100px",opacity:0},500,function(){
                // hide current
                current.addClass('hidden');

                // show next
                var next = $('div[data-panel="'+ position +'"]');
                next.removeClass('hidden');
                showNext(next);
            })
        };


        this.showNext = function(next){
            var wrapper = next.find('.wrapper');

            wrapper.fadeIn('500',function(){
                manageOptions(next);
            });
        };

        this.manageOptions = function(next){
            var options = next.find('.options');
            var counter = 0;

            options.find('div').each(function(item, el){
                $(el).delay(counter).fadeIn(300);
                counter += 500;

            })

        };





        init();
    })();

});