const hamburger = document.querySelector('.hamburger');
const listItem = document.querySelectorAll('.list');
const navContainer = document.querySelector('.nav-container');
const mediaQuery = window.matchMedia('(max-width: 800px)')


hamburger.addEventListener("click", function(){
    console.log("im working");
    if (navContainer.style.display ==="none"){
        navContainer.style.display = "flex";
    }
    else (navContainer.style.display = "none")
    
    if (hamburger.style.display == "none"){
        navContainer.style.display = "flex"
    }
    
    
    })


