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
const clickAway = document.getElementsByClassName('container');
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
};

const message = document.getElementById('message');
const messageCounter = document.getElementById('message-counter');
maxlength = message.getAttribute("maxlength");
message.onkeyup =()=>{
    messageCounter.innerHTML = maxlength - message.value.length;
};

const numberError= document.getElementById('number-error');
const numberField= document.getElementById('number-field');

numberField.addEventListener('input',()=>{
    if(numberField.value===''){numberError.innerHTML= ('please enter a phone number')}

    
})


