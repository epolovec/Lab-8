function showbar() {
    document.getElementById("search-bar").style.display = "block";
}

const image = document.getElementById('image');
const background = document.querySelector('.background');

image.addEventListener('load', () => {
  background.style.height = `${image.offsetHeight}px`;
});

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
} 

