import '../styles/menu.css';
import meal1 from '../assets/meal1.jpeg';
import meal2 from '../assets/meal2.jpeg'

const generateMenuPage = () => {
    const wrapperDiv = document.createElement('div');
    wrapperDiv.classList.add('menuPageWrapper');

    // menu title
    const title = document.createElement('h1');
    title.classList.add('menutitle');
    title.innerText = 'Menu';

    // append to wrapper
    wrapperDiv.appendChild(title);

    const cardGrid = document.createElement('div');
    cardGrid.classList.add('cardGrid');

    const card1 = document.createElement('div');
    card1.classList.add('card');
    const card1Title = document.createElement('h1');
    card1Title.classList.add('cardTitle');
    card1Title.innerText = "Meal 1";
    card1.appendChild(card1Title);
    const card1Description = document.createElement('p');
    card1Description.classList.add('cardDescription');
    card1Description.innerText = 'This is the description of this current meal';
    card1.appendChild(card1Description);
    const card1Image = document.createElement('img');
    card1Image.classList.add('cardImg');
    card1Image.src = meal1;
    card1.appendChild(card1Image);

    cardGrid.appendChild(card1);

    const card2 = document.createElement('div');
    card2.classList.add('card');
    const card2Title = document.createElement('h1');
    card2Title.classList.add('cardTitle');
    card2Title.innerText = "Meal 2";
    card2.appendChild(card2Title);
    const card2Description = document.createElement('p');
    card2Description.classList.add('cardDescription');
    card2Description.innerText = 'This is the description of this current meal';
    card2.appendChild(card2Description);
    const card2Image = document.createElement('img');
    card2Image.classList.add('cardImg');
    card2Image.src = meal2;
    card2.appendChild(card2Image);

    cardGrid.appendChild(card2);

    wrapperDiv.appendChild(cardGrid);

    return wrapperDiv;
}

export default generateMenuPage;