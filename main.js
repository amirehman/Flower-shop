import './style.css'
import Siema from 'siema';
import Alpine from 'alpinejs'
 
// Alpine
window.Alpine = Alpine
Alpine.start()


const mySiema = new Siema({
    selector: '.siema',
    perPage: 1,
    loop: true,
});

const prev = document.querySelector('.prev-siema');
const next = document.querySelector('.next-siema');


prev.addEventListener('click', () => mySiema.prev());
next.addEventListener('click', () => mySiema.next());

const showMegaMenu = document.querySelectorAll(".show-menga-menu");
const MegaMenu = document.getElementById("mega-menu");

// MegaMenu.classList.remove('hidden')

const toggleClassDivs = (evt) => {
    const isEnter = evt.type === "mouseenter";
    MegaMenu.classList[isEnter ? "remove" : "add"]("hidden");
    evt.currentTarget.classList.remove("red");
  };
  
  showMegaMenu.forEach(el => {
    el.addEventListener("mouseenter", toggleClassDivs);
    el.addEventListener("mouseleave", toggleClassDivs);
  });

