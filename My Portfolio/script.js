// navigation bar
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('open');

  // Set right: 0% when opening the navbar
  if (navbar.classList.contains('open')) {
    navbar.style.right = '0%';
  } else {
    // Reset the style when closing the navbar
    navbar.style.right = '';
  }
}

// Close the navbar if the window is resized to more than 1090px
window.onresize = () => {
  if (window.innerWidth > 1090) {
    navbar.classList.remove('open');
    menu.classList.remove('bx-x');
    navbar.style.right = ''; // Reset the style when closing the navbar
  }
}





// For Heading Text (I'm Danish...)
var typed = new Typed('#element', {
  strings: ['Programmer.', 'Developer.'],
  typeSpeed: 180,
  backSpeed: 50,
  loop: true
});



// For Disable Contex Menu 
// document.addEventListener('contextmenu', (e) => {
//   e.preventDefault();
// });

// document.addEventListener('selectstart', (e) => {
//   e.preventDefault();
// });


// For Custom Cursor Effect
// const fireContainer = document.createElement("div");
// fireContainer.className = "fire-container";
// document.querySelector('#Main').appendChild(fireContainer);

// document.addEventListener("mousemove", function(event){
//     createFire(event.clientX, event.clientY);
// });

// function createFire(x,y){
//     const fire = document.createElement("div");
//     fire.className = "fire";
//     fire.style.left = x + "px";
//     fire.style.top = y + "px";
//     fireContainer.appendChild(fire);

//     setTimeout(() => {
//         fire.remove();
//     }, 1000);
// }