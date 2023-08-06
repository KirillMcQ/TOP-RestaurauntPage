const generateContactPage = () => {
    const wrapperDiv = document.createElement('div');

    const title = document.createElement('h1');
    title.classList.add('contactPageTitle');
    title.innerText = 'Contact';

    wrapperDiv.appendChild(title);

    const email = document.createElement('h3');
    email.classList.add('contactEmail');
    email.innerText = 'Email: foo@bar.com';

    wrapperDiv.appendChild(email);

    const phoneNumber = document.createElement('h3');
    phoneNumber.classList.add('contactNumber');
    phoneNumber.innerText = 'Phone Number: (111)-111-1111';

    wrapperDiv.appendChild(phoneNumber);

    return wrapperDiv;
}

export default generateContactPage;