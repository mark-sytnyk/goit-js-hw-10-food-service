import './sass/main.scss';
import './styles.css';
import menu from './menu.json';
import menuTemplate from './menuItem.hbs';
const menuRef = document.querySelector('.js-menu')
const createMenuItem = menuTemplate(menu)
menuRef.insertAdjacentHTML('afterbegin', createMenuItem)
const btnTgl = document.querySelector('.theme-switch__toggle')
const body = document.querySelector('body')
const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };



  function qqq (evt) {
    if (btnTgl.checked) {
    body.classList.add(Theme.DARK)
    body.classList.remove(Theme.LIGHT)
    localStorage.setItem('theme', 'dark')
    
    } else  {
    body.classList.add(Theme.LIGHT)
    body.classList.remove(Theme.DARK)
    localStorage.setItem('theme', 'light')
    
    }
  }
 btnTgl.addEventListener('change', qqq)



 const tyuiop = localStorage.getItem('theme')
 if (tyuiop === 'dark') {
    body.classList.add(Theme.DARK)
    body.classList.remove(Theme.LIGHT)
    btnTgl.checked = true
 } else if (tyuiop === 'light') {
    body.classList.add(Theme.LIGHT)
    body.classList.remove(Theme.DARK)
 }


