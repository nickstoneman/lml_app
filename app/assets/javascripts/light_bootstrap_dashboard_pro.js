//= require light_bootstrap_dashboard_pro/jquery-ui.min
//= require light_bootstrap_dashboard_pro/bootstrap.min
//= require light_bootstrap_dashboard_pro/jquery.validate.min
//= require light_bootstrap_dashboard_pro/moment.min
//= require light_bootstrap_dashboard_pro/bootstrap-datetimepicker
//= require light_bootstrap_dashboard_pro/bootstrap-selectpicker
//= require light_bootstrap_dashboard_pro/bootstrap-checkbox-radio-switch-tags
// require light_bootstrap_dashboard_pro/chartist.min
//= require light_bootstrap_dashboard_pro/bootstrap-notify
//= require light_bootstrap_dashboard_pro/sweetalert2
//= require light_bootstrap_dashboard_pro/jquery-jvectormap
//= require light_bootstrap_dashboard_pro/jquery.bootstrap.wizard.min
//= require light_bootstrap_dashboard_pro/bootstrap-table
//= require light_bootstrap_dashboard_pro/fullcalendar.min
//= require light_bootstrap_dashboard_pro/light-bootstrap-dashboard
//= require light_bootstrap_dashboard_pro/app-init
//
// Dynamic load the javascript init based on features specified from view
// Combine the best practice to handle javascript invocation in rails
// http://brandonhilkert.com/blog/organizing-javascript-in-rails-application-with-turbolinks/
// https://viget.com/extend/javascript-execution-patterns-for-non-web-apps
//
// You have two methods to load your custom javascript init
//
// Method one:
// -----------------------------------------------------------------------------
// Uncomment the following lines to load your custom init in here
//
$(document).on("page:change", function() {
  if ($.inArray('feature1',App.features()) >= 0) {
    // Write your feature1 init script here ...
    /*
 *
 * login-register modal
 * Autor: Creative Tim
 * Web-autor: creative.tim
 * Web script: http://creative-tim.com
 * 
 */
function showRegisterForm(){
    $('.loginBox').fadeOut('fast',function(){
        $('.registerBox').fadeIn('fast');
        $('.login-footer').fadeOut('fast',function(){
            $('.register-footer').fadeIn('fast');
        });
        $('.modal-title').html('Register with');
    }); 
    $('.error').removeClass('alert alert-danger').html('');
       
}
function showLoginForm(){
    $('#loginModal .registerBox').fadeOut('fast',function(){
        $('.loginBox').fadeIn('fast');
        $('.register-footer').fadeOut('fast',function(){
            $('.login-footer').fadeIn('fast');    
        });
        
        $('.modal-title').html('Login with');
    });       
     $('.error').removeClass('alert alert-danger').html(''); 
}

function openLoginModal(){
    showLoginForm();
    setTimeout(function(){
        $('#loginModal').modal('show');    
    }, 230);
    
}
function openRegisterModal(){
    showRegisterForm();
    setTimeout(function(){
        $('#loginModal').modal('show');    
    }, 230);
    
}

function loginAjax(){
    /*   Remove this comments when moving to server
    $.post( "/login", function( data ) {
            if(data == 1){
                window.location.replace("/home");            
            } else {
                 shakeModal(); 
            }
        });
    */

/*   Simulate error message from the server   */
     shakeModal();
}

function shakeModal(){
    $('#loginModal .modal-dialog').addClass('shake');
             $('.error').addClass('alert alert-danger').html("Invalid email/password combination");
             $('input[type="password"]').val('');
             setTimeout( function(){ 
                $('#loginModal .modal-dialog').removeClass('shake'); 
    }, 1000 ); 
}
  }
});
//
// Method two:
// -----------------------------------------------------------------------------
// Put the above script from method one in separate js file, then require it
// from application.js or light_bootstrap_dashboard_pro.js. Let say if you have
// 3 feature init scripts with file name app.feature1.js, app.feature2.js and
// app.feature3.js. You can place the `=` sign in front of the require statement
// to init that particular feature.
//
// require app.feature1
// require app.feature2
// require app.feature3
//
// After you done, please remember to add the content_for to specify the feature
// you want to add in your view. For example, if i want to add the feature1 and
// feature2, it will be <% content_for :features, "feature1 feature2" %>
