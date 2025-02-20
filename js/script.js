//toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

//menu section active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    //sticky navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);
    
    //remove toggle icon and navbar when click navbar link(scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};
//scroll reveal
ScrollReveal({
    //reset:true,
    distance:'80px',
    duration:2000,
    delay:200
});
ScrollReveal().reveal('.home-content,.heading',{origin:'top'});
ScrollReveal().reveal('.home-img, .portfolio-box, .contact form',{origin:'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img',{origin:'left'});
ScrollReveal().reveal('.home-content p, .about-content',{origin:'right'});
//typed js
const typed = new Typed('.multiple-text',{
    strings:['Computer engineer','Cybersecurity Enthusiast','Problem Solver','QA Tester','Team Player','Fast Learner','Adaptable Developer','Mobile App Developer','Full-Stack Developer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});
// Initialize Swiper
var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow', // Choose the 3D effect
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });


  const scriptURL = 'https://script.google.com/macros/s/AKfycbwxTHPXCpjGHFO2ITTXz2_VZQymd9I-LvsSvpnXb2SVpSP-DKLLOZMxQTR9BZNXRpQH/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })


  document.addEventListener("DOMContentLoaded", function () {
    const skillSection = document.querySelector(".skills-container"); // Target the skills section
    const skillIcons = document.querySelectorAll(".card-front img"); // Get all icons

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                skillIcons.forEach(icon => {
                    if (!icon.classList.contains("flip")) {
                        icon.classList.add("flip"); // Flip only once
                        icon.addEventListener("animationend", function () {
                            icon.classList.remove("flip"); // Remove class after animation
                        }, { once: true });
                    }
                });
            }
        });
    }, { threshold: 0.5 }); // Trigger when 50% of the section is visible

    observer.observe(skillSection);
});