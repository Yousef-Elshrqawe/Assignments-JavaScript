let submit = document.querySelector("[type=submit]")document.forms[0].onsubmit = function (e){    e.preventDefault();}submit.onclick = function () {    let num = document.querySelector(".input")    let tex = document.querySelectorAll(".input")[1]    let div = document.querySelector(".results")    let chlrn= document.querySelectorAll(".results .box");    let selct = document.body.querySelector("select").value.toLowerCase()    chlrn.forEach(function (ele) {        ele.remove();    });    for (let i = 0 ; i < num.value ; i++ )    {        let myd =  document.createElement(`${selct}`)        myd.className= "box"        myd.title= "Element"        myd.id= `id-${i}`        let myHT = document.createTextNode(`${tex.value}`)        div.appendChild(myd)        myd.appendChild(myHT)    }}