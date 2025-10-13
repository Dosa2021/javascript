'use strict'

const menuItems = document.querySelectorAll('.menu li a')
const contents = document.querySelectorAll('.content')

menuItems.forEach((item) => {
  item.addEventListener('click', e => {
    e.preventDefault();

    menuItems.forEach((i) => {
      i.classList.remove('active');
    })

    item.classList.add('active')

    contents.forEach((i) => {
      i.classList.remove('active');
    })

    document.getElementById(item.dataset.id).classList.add('active')
  })
})

