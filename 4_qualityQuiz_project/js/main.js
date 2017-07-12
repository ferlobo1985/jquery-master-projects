$(document).ready(function() {

    (function startQuiz(){

        this.settings = {
            results:[]
        };

        this.loadQuiz = function(){


            $('.panel_one h1').show("drop",500,function(){
              $('.start_quiz').addClass("started",500)
            });
            $('.start_quiz').on("click",function(){
                showPanel(1);
                listenNext();
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
            var childrens =  options.find('div');
            var counter = 0;

            childrens.each(function(item, el){
                $(el).delay(counter).fadeIn(300);
                counter += 500;
            });

            childrens.on("click",function(){
                childrens.removeClass('active');
                next.addClass('valid');
                $(this).addClass('active');
            });
        };


        this.listenNext = function(){
            $('.next_question').on("click",function(){
                if(validateSelection($(this))){
                    var next = $(this).data('next');
                    showPanel(next);
                    showProgressAndStore(next);
                }
            });
        };

        this.validateSelection = function($this){
            var parent = $this.parents().eq(1);

            if(parent.hasClass('valid')){
                return true;
            } else {
                $('.error').fadeIn('300',function(){
                    $(this).delay(1000).fadeOut('300');
                });
                return false
            }
        };



        this.showProgressAndStore = function(panel){
            $('.progress .bar').animate({'width':'+=25%'},500);

            var options = $('div[data-panel="'+ (panel - 1) +'"]').find('.options');
            options.find('div').each(function(item, el) {
               if($(this).hasClass('active')){
                   settings.results.push($(this).text());
                   console.log(settings.results)
               }
            });
        };

        loadQuiz();
    })();

});