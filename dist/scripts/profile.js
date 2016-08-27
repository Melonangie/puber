// User profile auto fill
$( document ).ready(function() {
var user = Cookies.get('puber');
console.log(user);

$('input#profile-name').val(user.name);
$('input#profile-email').val(user.email);
$('input#profile-phone').val(user.phone);

});
