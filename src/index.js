import generateHomePage from './pages/home.js'

const contentDiv = document.querySelector('.content'); // Appending everything to this

contentDiv.appendChild(generateHomePage());