

$(document).ready(function() {

    (function musicDb(){
        var database;

        this.loadAssets = function(){
            $.getJSON( "db/movies.json", function( data ) {
                database = data;
                init();
            })
        };

        this.init  = function(){
            filterSlider();
            getTypes();
            getDirector();
            generateMarkup();
        };


        this.filterSlider = function(){
            $(".filter.open").on("click",function(){

                $('.filter_container').slideToggle(300,function(){
                    var btn = $(this).prev();
                    if(btn.hasClass('active')){
                        $('.filter.open').find('.btn_title').text('Filter by');
                        btn.removeClass('active');
                    }else{
                        $('.filter.open').find('.btn_title').text('Close');
                        btn.addClass('active');
                    }
                });

            });
        };


        this.getTypes = function() {
            var types = [];

            $.each( database, function( index ) {
                if($.inArray(database[index].type, types)){
                    var typeValue = database[index].type;
                    types.push(typeValue);
                    $('#categories').append('<option value="'+typeValue +'">' + typeValue + '</option>')
                }
            });
        };


        this.getDirector = function(){
            var director = [];

            $.each(database,function (index) {
                if($.inArray(database[index].director, director)){
                    var directorValue = database[index].director;
                    director.push(directorValue);
                    $('#directors').append('<option value="'+ directorValue +'">' + directorValue + '</option>')
                }
            })

        };


        this.generateMarkup = function(){

            var template = '';

            $.each(database,function (index) {

                var id = database[index].id;
                var category = database[index].type;
                var director = database[index].director;

                template +=  '<div class="movie_item" data-id="'+ id +'" data-category="'+ category +'"  data-director="'+ director +'">';
                template +=     '<div class="header">';
                template +=         '<div class="left">';
                template +=             '<img src="images/movies/'+ database[index].img +'">';
                template +=         '</div>';
                template +=         '<div class="right">';
                template +=             '<h3>'+ database[index].title +'</h3>';
                template +=             '<div class="node">';
                template +=                 '<span>Year:</span> '+ database[index].year;
                template +=             '</div>';
                template +=             '<div class="node">';
                template +=                 '<span>Director:</span> '+ database[index].director;
                template +=             '</div>';
                template +=             '<div class="node">';
                template +=                 '<span>Type:</span> '+ database[index].type ;
                template +=             '</div>';
                template +=             '<div class="show_desc">See description</div>';
                template +=         '</div>';
                template +=     '</div>';
                template +=     '<div class="description">';
                template +=         '<strong>Description:</strong> ' + database[index].desc;
                template +=     '</div>';
                template += '</div>';
            });

            $('.movies_content').append(template);
            showDescription();
            startFilter();

        };

        this.showDescription = function(){

            $('.show_desc').on("click", function(){
                var $this = $(this);
                var parent = $(this).parents().eq(2);
                var element = parent.find('.description');

                element.slideToggle("300",function(){
                    if($this.hasClass('active')){
                        $this.text('See description').removeClass('active');
                    }else{
                        $this.text('Hide description').addClass('active');
                    }
                });

            });
        };


        this.startFilter = function(){

            $('select').on("change",function(){

                var category = $('#categories').val();
                var director = $('#directors').val();
                var results = [];

                $.each(database,function (index) {
                    // CATEGORIES
                    if(database[index].type === category){
                        results.push(database[index].id);
                    }
                    if(database[index].director === director){
                        results.push(database[index].id);
                    }
                    //console.log(results);
                });

                if(results.length < 1){
                    $('.movie_item').show();
                }else{
                    var uniqueArray = [];
                    $.each(results, function(i, e) {
                        if ($.inArray(e, uniqueArray) == -1) uniqueArray.push(e);
                    });

                    $('.movie_item').hide();
                    $.each(uniqueArray, function(i,e) {
                        $('div[data-id="'+ e +'"]').show();
                    });
                }
            });

        };

        loadAssets();
    })();

});