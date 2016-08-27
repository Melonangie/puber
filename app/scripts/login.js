// Login Form Scripts

$(function() {

    $('#loginForm input#login-email').jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var loginEmail = $('input#login-email').val();
            $.support.cors = true;
            var loginUrl = 'http://puber-api.herokuapp.com/users.json?email=' + loginEmail;
            $.ajax({
                url: loginUrl,
                type: 'GET',
                crossDomain: true,
                cache: false,
                success: function(data) {
                    console.log(data);
                    var empty = isEmpty(data);
                    if (!empty) {
                        Cookies.set('puber', data, { expires: 7 });
                        page('/dashboard.html');
                    } else {
                    // Fail message
                    $('#login-success').html('<div class=\'alert alert-danger\'>');
                    $('#login-success > .alert-danger').append('<strong>Sorry wrong information. Please try again or register.</strong>');
                    $('#login-success > .alert-danger').append('</div>');
                    //clear all fields
                    $('#contactForm').trigger('reset');
                    }
                },
                error: function() {
                    // Fail message
                    $('#login-success').html('<div class=\'alert alert-danger\'>');
                    $('#login-success > .alert-danger').append('<strong>Sorry wrong information. Please try again or register.</strong>');
                    $('#login-success > .alert-danger').append('</div>');
                    //clear all fields
                    $('#contactForm').trigger('reset');
                },
            });
        },
        filter: function() {
            return $(this).is(':visible');
        },
    });

    $('a[data-toggle="tab"]').click(function(e) {
        e.preventDefault();
        $(this).tab('show');
    });
});


/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
    $('#success').html('Thanks you will receive a message in short to validate your account');
});
