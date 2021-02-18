const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

const body = document.body;

var menuOpen = false;

const linksCount = 6;

var linksDelays = [];
for(var i = 1; i <= linksCount; i++) {
  linksDelays.push(i * 0.2);
}

hamburger.addEventListener('click', () => {
  if(!menuOpen) {
    navLinks.classList.add('open');
    menuOpen = true;
    body.style.overflow = "hidden";
  }
  else {
    navLinks.classList.remove('open');
    menuOpen = false;
    body.style.overflow = "visible";
  }

  hamburger.classList.toggle('open');

  for(var i = 0; i < linksCount; i++) {
    links[i].style.transition = `all 0.5s ease ${linksDelays[i]}s`;
  }
  for(var i = 0; i < linksCount; i++) {
    linksDelays[i] = linksCount*0.2 - linksDelays[i];
  }

  links.forEach(link => {
    link.classList.toggle('fade-in');
  });
});


function goToHomePage() {
  window.location.href = "http://codeandcube.com";

}

function goToSignUpPage() {
  window.location.href = "sign-up";
}
