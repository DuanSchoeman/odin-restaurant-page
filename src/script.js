import pizzaImg from './pizza-image.jpeg';

export function loadHome() { 
    const Content = document.getElementById('content'); // Or use querySelector
    Content.innerHTML = '';
    
    
    const welcomeHeading = document.createElement('h1');
    const paragraph1 = document.createElement('p');
    const paragraph2 = document.createElement('p');

    const img = document.createElement('img');
    img.src = pizzaImg;
    img.alt = "Pizza-Image";

    welcomeHeading.textContent = "Welcome to Mario's Pizza!";
    paragraph1.textContent = "The best authentic Italian pizza in town! Made with love and fresh ingredients since 1985.";
    paragraph2.textContent = "Come visit us for an unforgettable dining experience!";

    const content = document.getElementById('content');

    content.appendChild(welcomeHeading);
    content.appendChild(img);
    content.appendChild(paragraph1);
    content.appendChild(paragraph2);
};




