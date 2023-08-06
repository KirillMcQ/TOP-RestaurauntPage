import generateHomePage from './pages/home.js'
import generateMenuPage from './pages/menu.js'
import generateContactPage from './pages/contact.js';

// base css
import './styles/base.css';

const contentDiv = document.querySelector('.content'); // Appending everything to this


// make navbar buttons global so I can add event listeners and handle page switches
let homeBtn, menuBtn, contactBtn;
const generateNavbar = () => {
    const wrapperDiv = document.createElement('div');
    wrapperDiv.classList.add('navbar');

    homeBtn = document.createElement('button');
    homeBtn.classList.add('homeBtn');
    homeBtn.classList.add('navbarBtn');
    homeBtn.innerText = 'Home';

    
    menuBtn = document.createElement('button');
    menuBtn.classList.add('menuBtn');
    menuBtn.classList.add('navbarBtn');
    menuBtn.innerText = 'Menu';
    
    
    contactBtn = document.createElement('button');
    contactBtn.classList.add('contactBtn');
    contactBtn.classList.add('navbarBtn');
    contactBtn.innerText = 'Contact';

    // Button Event listeners
    homeBtn.addEventListener('click', function() {
        clearContent()
        contentDiv.appendChild(generateHomePage());
        homeBtn.classList.add('active');
        menuBtn.classList.remove('active');
        contactBtn.classList.remove('active');
    });

    menuBtn.addEventListener('click', function() {
        clearContent()
        contentDiv.appendChild(generateMenuPage());
        homeBtn.classList.remove('active');
        menuBtn.classList.add('active');
        contactBtn.classList.remove('active');
    });

    contactBtn.addEventListener('click', function() {
        clearContent()
        contentDiv.appendChild(generateContactPage());
        homeBtn.classList.remove('active');
        menuBtn.classList.remove('active');
        contactBtn.classList.add('active');
    });
    
    // Append Buttons
    wrapperDiv.appendChild(homeBtn);
    wrapperDiv.appendChild(menuBtn);
    wrapperDiv.appendChild(contactBtn);

    return wrapperDiv;
}

// Clear all children from contentDiv then re-add the navbar
const clearContent = () => {
    // remove all children
    contentDiv.innerHTML = '';
    // add navbar (should always be on the page)
    contentDiv.appendChild(generateNavbar());
}

clearContent();
contentDiv.appendChild(generateHomePage());
homeBtn.classList.add('active');
menuBtn.classList.remove('active');
contactBtn.classList.remove('active');
