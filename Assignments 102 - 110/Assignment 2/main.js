let closeBtn = document.querySelector(".close");closeBtn.onclick= function() {    closeBtn.parentElement.style.display ="none";}let popUp = document.querySelector(".parent");setTimeout(function() {    popUp.style.display ="block";},5000);