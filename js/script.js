/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav-toggle", "nav-menu1");

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu1");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 1000,
  delay: 100,
  reset: true,
});

sr.reveal(".home__data, .about__img, .skills__subtitle, .skills__text", {});
sr.reveal(".home-img, .about__subtitle, .about__text, .skills__img", {
  delay: 100,
});
sr.reveal(".home__social-icon", { interval: 100 });
sr.reveal(".skills__data, .work__img, .contact__input", { interval: 50 });

/*SCROLL HOME*/
sr.reveal(".home-title", {});
// sr.reveal( ".button", { delay: 100 } );
sr.reveal(".home-img", { delay: 100 });
sr.reveal(".home-social-icon", { interval: 100 });

/*SCROLL ABOUT*/
sr.reveal(".about-img", {});
sr.reveal(".about-subtitle", { delay: 100 });
sr.reveal(".about-text", { delay: 100 });

// Scross main skills mainskills
sr.reveal(".mainskills", { interval: 50 });
sr.reveal(".mskill-img", { delay: 50 });
sr.reveal(".mskill-text", { delay: 50 });

/*SCROLL SKILLS*/
sr.reveal(".skills-subtitle", {});
sr.reveal(".skills-text", {});
sr.reveal(".skills-data", { interval: 50 });
sr.reveal(".contact-input", { interval: 100 });

document.querySelector("#resume-button-1").addEventListener("click", () => {
  window.open(
    "https://drive.google.com/file/d/14YYtYQ2TWK9J8KdAeMt8ERLnXjoP5kUX/view?usp=sharing"
  );
});

var typing = new Typed(".text", {
  strings: ["Full Stack Web Developer", "Prompt Engineer", "Analyst",],
  typeSpeed: 90,
  backSpeed: 80,
  loop: true,
});

// 1st
function resumeClick1() {
  window.open(
    "https://drive.google.com/file/d/14YYtYQ2TWK9J8KdAeMt8ERLnXjoP5kUX/view?usp=sharing"
  );
}
// 2nd
function resumeClick2() {
  window.open(
    "https://drive.google.com/file/d/14YYtYQ2TWK9J8KdAeMt8ERLnXjoP5kUX/view?usp=sharing"
  );
}
