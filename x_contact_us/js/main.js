

$(document).ready(function() {

    $("#myForm").validate({
        rules: {
            name: "required",
            email: {
                required: true,
                email: true
            },
            age: {
                required: true,
                minlength: 2,
                digits: true,
                greaterThan:true
            },
            password: {
                required: true,
                minlength: 5
            },
            confirmPassword: {
                required: true,
                minlength: 5,
                equalTo: "#password"
            },

            movieGenre: {
                required: true
            },
            receiveMails: "required"
        },
        messages: {
            name: "Please enter your firstname",
            email: {
              required: "Your email address is missing",
              email:"Please enter a valid email"
            },
            age: {
                required:"You need to enter your age",
                digits:"Digits only please",
                greaterThan:"You need to be at least 20"
            },
            password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long"
            },
            confirmPassword: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long",
                equalTo: "Please enter the same password as above"
            },
            movieGenre:"please select one",
            receiveMails: "Please select at least 2 topics"
        },
        errorPlacement: function(error, element) {
            // Append error within linked label
            $( element ).before(error)
        },
        errorElement: "div"
    });


    $.validator.addMethod("greaterThan", function (value, element, param) {

        if(value < 20){
            return false
        }else{
            return true
        }

    });



});