// ********** DOM Icinden Oge Secimi **********

// https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector

// let h2 = document.getElementsByTagName('h2')
let title = document.getElementById('title')
title.innerHTML = 'denemel'
console.log(title.innerHTML)

let link = document.querySelector("#kodluyoruzLink")
link.innerHTML = " degisti "
link.style.color = "blue"
link.classList.add('btn')


