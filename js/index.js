const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const navLinks = document.querySelectorAll('a');
navLinks[0].textContent = "Services"
navLinks[1].textContent = "Product"
navLinks[2].textContent = "Vision"
navLinks[3].textContent = "Features"
navLinks[4].textContent = "About"
navLinks[5].textContent = "Contact"
navLinks.forEach((element) => {
  element.style.color = 'green'
})

const nav = document.querySelector('nav')
const newFrontNavLink = document.createElement('a');
newFrontNavLink.textContent = 'Home';
const newEndNavLink = document.createElement('a')
newEndNavLink.textContent = 'FeedBack'
nav.prepend(newFrontNavLink);
nav.appendChild(newEndNavLink)
newFrontNavLink.style.color = 'green'
newEndNavLink.style.color = 'green'

const codeLogo = document.querySelector("#cta-img");
codeLogo.src = 'img/header-img.png'

const ctaHeader = document.querySelector('h1');
ctaHeader.textContent = "DOM Is Awesome"


const ctaButton = document.querySelector('button');
ctaButton.textContent = 'Get Started';

const contentHeader = document.querySelectorAll('h4');
contentHeader[0].textContent = 'Features'
contentHeader[1].textContent = 'About'
contentHeader[2].textContent = 'Services'
contentHeader[3].textContent = 'Product'
contentHeader[4].textContent = 'Vision'
contentHeader[5].textContent = 'Contact'


const contentInfo = document.querySelectorAll('p');
contentInfo[0].textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
contentInfo[1].textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
contentInfo[2].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
contentInfo[3].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
contentInfo[4].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
contentInfo[5].textContent = '123 Way 456 Street Somewhere, USA'
contentInfo[6].textContent = '1 (888) 888-8888'
contentInfo[7].textContent = 'sales@greatidea.io'
contentInfo[8].textContent = 'Copyright Great Idea! 2018'

const middleImg = document.querySelector('#middle-img');
middleImg.src = 'img/mid-page-accent.jpg'