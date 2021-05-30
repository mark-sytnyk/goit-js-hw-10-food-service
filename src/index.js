import './sass/main.scss';
import './styles.css';
import menu from './menu.json';
import menuTemplate from './menuItem.hbs';
const menuRef = document.querySelector('.js-menu')
const createMenuItem = menuTemplate(menu)
menuRef.insertAdjacentHTML('afterbegin', createMenuItem)
const buttonToggle = document.querySelector('.theme-switch__toggle')
const body = document.querySelector('body')
const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };



  function onCheckboxClick (evt) {
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
  buttonToggle.addEventListener('change', onCheckboxClick)



 const bodyTheme = localStorage.getItem('theme')
 if (bodyTheme === 'dark') {
    body.classList.add(Theme.DARK)
    body.classList.remove(Theme.LIGHT)
    buttonToggle.checked = true
 } else if (bodyTheme === 'light') {
    body.classList.add(Theme.LIGHT)
    body.classList.remove(Theme.DARK)
 }


