export function loadMenu() {
    const Content = document.getElementById('content'); // Or use querySelector
    Content.innerHTML = '';

    const menuHeading = document.createElement('h1');
    menuHeading.textContent = "Our Menu";
    
    const menuItem1 = document.createElement('div');
    const item1Title = document.createElement('h3');
    item1Title.textContent = "Margherita Pizza - $12";
    const item1Desc = document.createElement('p');
    item1Desc.textContent = "Fresh mozzarella, tomato sauce, and basil";
    menuItem1.appendChild(item1Title);
    menuItem1.appendChild(item1Desc);
    
    const menuItem2 = document.createElement('div');
    const item2Title = document.createElement('h3');
    item2Title.textContent = "Pepperoni Pizza - $14";
    const item2Desc = document.createElement('p');
    item2Desc.textContent = "Classic pepperoni with extra cheese";
    menuItem2.appendChild(item2Title);
    menuItem2.appendChild(item2Desc);
    
    const content = document.getElementById('content');
    content.appendChild(menuHeading);
    content.appendChild(menuItem1);
    content.appendChild(menuItem2);
};