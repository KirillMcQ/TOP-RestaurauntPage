import foodImg from '../assets/food.png'

const generateHomePage = () => {
    const homeWrapper = document.createElement('div'); // contains all content for this page
    homeWrapper.classList.add('homePageWrapper');

    // home title
    const title = document.createElement('h1');
    title.classList.add('homeTitle');
    title.innerText = 'Welcome to the restauraunt!';

    // append to wrapper
    homeWrapper.appendChild(title);

    // Image element configs
    const imgTag = document.createElement('img');
    imgTag.src = foodImg;
    imgTag.classList.add('foodImg');
    imgTag.alt = 'Home page food';

    // add to home wrapper
    homeWrapper.appendChild(imgTag);

    // Restaraunt description
    const desc = document.createElement('p');
    desc.classList.add('homeDescription');
    desc.innerText = "This is some random text. I need some random text so here it is. This text is the placeholder for the restauraunt home page. This is very interesting text and you should focus on reading it in depth and detail to fully retain all of this very important info about this amazing restauraunt.";
    
    // append to wrapper
    homeWrapper.appendChild(desc);

    // return wrapper to be appended to .content
    return homeWrapper;


}

export default generateHomePage;