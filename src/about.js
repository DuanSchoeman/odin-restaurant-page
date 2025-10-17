export function loadAbout() {
    const Content = document.getElementById('content'); // Or use querySelector
    Content.innerHTML = '';

    const aboutHeading = document.createElement('h1');
    aboutHeading.textContent = "About Us";
    
    const story = document.createElement('p');
    story.textContent = "Mario's Pizza was founded in 1985 by Mario Rossi, who brought authentic Italian recipes from Naples to your neighborhood.";
    
    const mission = document.createElement('p');
    mission.textContent = "Our mission is simple: serve the best pizza using traditional methods and the freshest ingredients.";
    
    const hours = document.createElement('h3');
    hours.textContent = "Hours";
    
    const hoursText = document.createElement('p');
    hoursText.textContent = "Monday - Sunday: 11am - 10pm";
    
    const content = document.getElementById('content');
    content.appendChild(aboutHeading);
    content.appendChild(story);
    content.appendChild(mission);
    content.appendChild(hours);
    content.appendChild(hoursText);
}