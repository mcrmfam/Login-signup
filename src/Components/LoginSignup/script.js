{
var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var passwordError = document.getElementById('password-error');
var submitError = document.getElementById('submit-error');

function validate-name()
    var name = document.getElementById('contact-name'.value;)

    if (name.length == 0){
        nameError.innerHTML = 'Name is required';
        return false;
    }
    else if (!name.match (/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Write Full Name';
        return false;
    }
    else nameError.innerHTML = 'valid';
    return true;
}