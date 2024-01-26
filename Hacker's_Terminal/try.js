const pr = document.querySelector(".para")
const rm1 = Math.floor(2+Math.random()*7)*1000
// const rm2 = Math.floor(1+Math.random()*10)*1000
// const rm3 = Math.floor(1+Math.random()*15)*1000

const firstPromise = new Promise(function(resolve, reject){
   setTimeout(() => {
        pr.innerHTML="Initializing Hacking..."
       resolve("Promise One resolved")
   }, 1000);
}) 


const secondPromise = new Promise(function(resolve, reject){
   setTimeout(() => {
       pr.innerHTML="Reading Your Files..."
       resolve("Promise two resolved")
       console.log(rm1+3000);
   }, (rm1+3000));
})


const thirdPromise = new Promise(function(resolve, reject){
   setTimeout(() => {
       pr.innerHTML="Password Files Detected..."
       resolve("Promise third resolved")
       console.log(rm1+6000);
   }, (rm1+8000));
})


const forthPromise = new Promise(function(resolve, reject){
   setTimeout(() => {
       pr.innerHTML="Sending all Passwords and Personal files to server..."
       resolve("Promise forth resolved")
       console.log(rm1+6000);
   }, (rm1+11000));
})


const fifthPromise = new Promise(function(resolve, reject){
   setTimeout(() => {
       pr.innerHTML="Cleaning Up..."
       resolve("Promise fifth resolved")
       console.log(rm1+6000);
   }, (rm1+15000));
})


const sixthPromise = new Promise(function(resolve, reject){
   setTimeout(() => {
       alert("Your Phone is Hacked !")
       pr.innerHTML="Login Grant !"
       resolve("Promise sixth resolved")
       console.log(rm1+6000);
   }, (rm1+16000));
}

)
// const seventhPromise = new Promise(function(resolve, reject){
//    setInterval(() => {
//         pr.innerHTML=" "
        
//        const html = `<p>Crashed !!!</p>`
//        document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html;

//        console.log(rm1+6000);
//        resolve("Promise seventh resolved");
//    }, (rm1+18000));
// })







async function GetPromise (){
    
        const firstwt = await firstPromise
        console.log(firstwt);
        
   
        const secondwt = await secondPromise
        console.log(secondwt);
        

        const thirdwt = await thirdPromise
        console.log(thirdwt);


        const forthwt = await forthPromise
        console.log(forthwt);


        const fifthwt = await fifthPromise
        console.log(fifthwt);

        const sixthwt = await sixthPromise
        console.log(sixthwt);  

        setInterval(() => {
            pr.innerHTML=" "
           const html = `<p>Crashed !!!</p>`
           document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html;
        //    console.log(rm1+6000);
       },1000);
        
        // const seventhwt = await seventhPromise
        // console.log(seventhwt);    
}

GetPromise();
