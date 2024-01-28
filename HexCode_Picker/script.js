
// Here is Function for Random Color With RGB() Values
// function getrandom(){
//     let r = Math.floor(1+Math.random()*255);
//     let g = Math.floor(1+Math.random()*255);
//     let b = Math.floor(1+Math.random()*255);

//     return `rgb(${r}, ${g}, ${b})`;
// }


// Here is Function for Random Color with Hex-Code values
let hexColor;
function getRandomColors() {
    let hex = '0123456789ABCDEF';  // Like Charecter Array [16 Elements]
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color = color + hex[Math.floor(Math.random() * 16)];
    }
    hexColor = color;
    return color;
}



let startinterval;
document.querySelector(".start").addEventListener('click', () => {
    if (startinterval== null) { // for checking the variable is null or not if null then do something below 
        startinterval = setInterval(() => {
            document.querySelector(".head").innerHTML = "Color Changing Started";
            document.querySelector('body').style.backgroundColor = getRandomColors();
            document.querySelector(".head").style.color= hexColor;
            document.querySelector(".para").style.display = "none";
            //    document.querySelector('body').style.backgroundColor= getrandom();
            // document.querySelector(".container").style.backgroundColor=getRandomColors();
        }, 1000);
    }
})


document.querySelector(".stop").addEventListener('click', () => {
    clearInterval(startinterval);
    startinterval = null;         // for flushing the memory occupied by the variable (For Better Coder)
    document.querySelector(".head").innerHTML = "Color Changing Stoped";
    document.querySelector(".para").style.display = "block";
    document.querySelector(".para").innerHTML = "Hex-Code:  " + hexColor;
    // document.querySelector(".para").style.color = hexColor;
    // document.querySelector('body').style.backgroundColor="white";
    // document.querySelector(".container").style.backgroundColor="#e0e0e0"
})
