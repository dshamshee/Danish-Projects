// Array of images
var images = ['url(01.jpg)', 'url(02.jpg)', 'url(03.jpg)', 'url(04.jpg)'];
// var images = ['01.jpg', '02.jpg', '03.jpg', '04.jpg'];
var header = ['I Love You Meri Jaan', 'I Love You Meri Bacchi', 'I love Meri Baua']
var currentImageIndex = 0;
var currentText = 0;


function changeText() {
    var hedd = document.querySelector('.hed');
   hedd.innerHTML  = header[currentText];
    currentText = (currentText + 1) % header.length;
}


// Function to change background image
function changeBackgroundImage() {
    var container = document.querySelector('.container');
    container.style.backgroundImage = images[currentImageIndex];
    // const rm = Math.floor(1+Math.random()*3)
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.querySelector(".btn").innerHTML="Click Again"
}

// Add event listener to button
document.getElementById('changeBgBtn').addEventListener('click', changeText);
document.getElementById('changeBgBtn').addEventListener('click', changeBackgroundImage);

