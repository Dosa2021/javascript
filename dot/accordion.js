'use strict';

console.log('aa')

const dts = document.querySelectorAll('dt');
dts.forEach((dt) => {
  dt.addEventListener('click', () => {
    console.log('fuga----')
    dt.parentNode.classList.toggle('appear')
  })
})


