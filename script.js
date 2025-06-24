const phrases = [
  "Développeur Web",
  "Créateur d'applications web & mobiles",
  "Passionné par le code et createur Tres engager",
  "Étudiant en Génie Logiciel"
];

let i = 0;
let j = 0;
let currentPhrase = [];
let isDeleting = false;
let isEnd = false;

function loop() {
  isEnd = false;
  document.querySelector(".animated-text").innerHTML = currentPhrase.join("");

  if (i < phrases.length) {
    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j]);
      j++;
      document.querySelector(".animated-text").innerHTML = currentPhrase.join("");
    }

    if (isDeleting && j <= phrases[i].length) {
      currentPhrase.pop(phrases[i][j]);
      j--;
      document.querySelector(".animated-text").innerHTML = currentPhrase.join("");
    }

    if (j === phrases[i].length) {
      isEnd = true;
      isDeleting = true;
    }

    if (isDeleting && j === 0) {
      currentPhrase = [];
      isDeleting = false;
      i++;
      if (i === phrases.length) {
        i = 0;
      }
    }
  }

  const spedUp = Math.random() * (80 - 50) + 50;
  const normalSpeed = Math.random() * (300 - 200) + 200;
  const time = isEnd ? 1000 : isDeleting ? spedUp : normalSpeed;
  setTimeout(loop, time);
}

loop();
function toggleTheme() {
  const body = document.body;
  const icon = document.getElementById("theme-icon");

  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }


  localStorage.setItem("theme", body.classList.contains("dark") ? "dark" : "light");
}


window.onload = () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    document.getElementById("theme-icon").classList.remove("fa-moon");
    document.getElementById("theme-icon").classList.add("fa-sun");
  }
}
const translations = {
  fr: {
    about_title: "À propos de moi",
    about_text_1: " Je suis un étudiant passionné en Génie Logiciel à l'IAI Bafoussam  Je développe des applications web et mobiles modernes en utilisant des technologies comme PHP, HTML, CSS, JavaScript, et React Native.Mon objectif est de créer des solutions numériques fonctionnelles, esthétiques et efficaces.",

    
    download_cv: "Télécharger mon CV",
  
  },
  en: {
    about_title: "About Me",
    about_text_1: " I'm a passionate student in Software Engineering at IAI Bafoussam I'm developing modern web and mobile applications using technologies like PHP, HTML, CSS, JavaScript, and React Native. My goal is to create functional, aesthetic and efficient digital solutions.Dynamic, curious and rigorous, I am constantly looking for new challenges to improve my skills and contribute to innovative projects. ",
    download_cv: "Download my CV",

  }
};

function setLanguage(lang) {
  const elements = document.querySelectorAll("[data-translate]");
  elements.forEach(el => {
    const key = el.getAttribute("data-translate");
    el.textContent = translations[lang][key];
  });

  localStorage.setItem("language", lang);
}

window.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("language") || "fr";
  setLanguage(savedLang);
});

const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
   
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');

    projectCards.forEach(card => {
      if (filter === 'all' || card.getAttribute('data-tech') === filter) {
        card.style.display = 'block';
        card.setAttribute('data-aos', 'zoom-in');
      } else {
        card.style.display = 'none';
      }
    });
  });
});
const form = document.getElementById('contact-form');
form.addEventListener('submit', (e) => {
  if (!form.checkValidity()) {
    e.preventDefault();
    alert('Veuillez remplir correctement tous les champs obligatoires.');
  } else {
    alert('Merci pour votre message ! (fonctionnalité d’envoi à implémenter)');
  }
});
function toggleMenu() {
  const nav = document.getElementById("nav-links");
  const burger = document.querySelector(".burger");
  nav.classList.toggle("active");
  burger.classList.toggle("open");
}
