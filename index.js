document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".navbar a");

    links.forEach(link => {
        link.addEventListener("click", function () {
            document.querySelector(".navbar a.active")?.classList.remove("active");
            this.classList.add("active");
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let menuIcon = document.querySelector("#menu-icon");
    let navbar = document.querySelector(".navbar");

    menuIcon.addEventListener("click", function () {
        navbar.classList.toggle("active");
    });
});


const words = ["Frontend Designer", "Web Designer", "UI/UX Designer", "Web Developer", "Ilustrator"];
let wordIndex = 0;
let charIndex = 0;
const textElement = document.querySelector('.text-animation span');
const typingSpeed = 150; 
const erasingSpeed = 100; 
const newWordDelay = 2000; 
function typeWord() {
    if (charIndex < words[wordIndex].length) {
        textElement.innerHTML += words[wordIndex][charIndex];
        charIndex++;
        setTimeout(typeWord, typingSpeed);
    } else {
        setTimeout(eraseWord, newWordDelay);
    }
}

function eraseWord() {
    if (charIndex > 0) {
        textElement.innerHTML = textElement.innerHTML.slice(0, -1);
        charIndex--;
        setTimeout(eraseWord, erasingSpeed);
    } else {
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(typeWord, typingSpeed);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    typeWord(); 
});


let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let selections=document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    selections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ']').classList.add('active')
            })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}