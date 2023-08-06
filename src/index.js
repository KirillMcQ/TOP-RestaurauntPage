import generateHomePage from './pages/home.js'
import generateMenuPage from './pages/menu.js'

const contentDiv = document.querySelector('.content'); // Appending everything to this

contentDiv.appendChild(generateMenuPage());