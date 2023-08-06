import generateHomePage from './pages/home.js'
import generateMenuPage from './pages/menu.js'
import generateContactPage from './pages/contact.js';

const contentDiv = document.querySelector('.content'); // Appending everything to this

contentDiv.appendChild(generateContactPage());