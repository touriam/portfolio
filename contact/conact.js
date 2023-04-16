const hamburger = document.querySelector('.hamburger');
const listItem = document.querySelectorAll('.list');
const navContainer = document.querySelector('.nav-container');
const mediaQuery = window.matchMedia('(max-width: 800px)');


hamburger.addEventListener("click", function(){
    console.log("im working");
    if (navContainer.style.display ==="none"){
        navContainer.style.display = "flex";
        hamburger.style.display ="flex"
    }
    
    else (navContainer.style.display = "none")
    
    })

const emailLabel = document.getElementById('email-label');
const emailField = document.getElementById('email-field');
const emailError = document.getElementById('email-error');

const validation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function emailCheck(){

    if(emailField.value == ""){
    emailError.innerHTML = "Please enter an email adress";
    emailField.style.borderBottomColor= "red";
    return false;
}
if(!emailField.value.match(validation)){
    emailError.innerHTML = "Please enter a valid email";
    emailField.style.borderBottomColor= "red";
    return false;
}

if(emailField.value.match(validation)){
    emailError.innerHTML = "";
    emailField.style.borderBottomColor= "green";
    return true;
}
else{
    return true;
}
}

const numberLabel = document.getElementById('number-label');
const numberField = document.getElementById('number-field');
const numberError = document.getElementById('number-error')

let numberValidation = ("^\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$");

function numberCheck() {
    if (numberField.value.match(numberValidation)){
        numberField.style.borderBottomColor ="green";
        return true;
    }
    if (!numberField.value.match(numberValidation)){
        numberField.style.borderBottomColor ="red";
        numberError.innerHTML = "Please Enter a Valid number";
        return false;
    }
    if (numberField.value = ""){
        numberError.innerHTML = "Please enter a phone number";
        return false;
    }
    else()=>{
        return true;
    }
}





