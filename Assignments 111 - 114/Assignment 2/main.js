let firstName = document.querySelector("input[name='first-name']");let lastName = document.querySelector("input[name='last-name']");let email = document.querySelector("input[name='email']");//First NamefirstName.addEventListener("blur",function(e){    window.sessionStorage.setItem("first-name",e.target.value);});if(window.sessionStorage.getItem("first-name")){    firstName.value = window.sessionStorage.getItem("first-name");}// Last NamelastName.addEventListener("blur",function(e){    window.sessionStorage.setItem("last-name",e.target.value);});if(window.sessionStorage.getItem("last-name")){    lastName.value = window.sessionStorage.getItem("last-name");}// Emailemail.addEventListener("blur",function(e){    window.sessionStorage.setItem("email",e.target.value);});if(window.sessionStorage.getItem("email")){    email.value = window.sessionStorage.getItem("email");}//Selec Optionwindow.onload = function () {    if (window.sessionStorage.getItem("hobbies")) {        document.querySelector("select[name='hobbies']").value = window.sessionStorage.getItem("hobbies");    }};let hobbies = document.querySelector("[name='hobbies']");hobbies.addEventListener("change",function () {    var select = document.querySelector("select[name='hobbies']");    var value = select.value;    window.sessionStorage.setItem("hobbies", value);    select.value = window.sessionStorage.getItem("hobbies");});