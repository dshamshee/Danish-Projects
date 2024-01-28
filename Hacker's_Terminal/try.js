const pr = document.querySelector(".para")
const rm1 = Math.floor(2+Math.random()*7)*1000
// const rm2 = Math.floor(1+Math.random()*10)*1000
// const rm3 = Math.floor(1+Math.random()*15)*1000

const firstPromise = new Promise(function(resolve, reject){
   setTimeout(() => {
        pr.innerHTML="Initializing Hacking"
       resolve("Promise One resolved")
   }, 1000);
}) 


const secondPromise = new Promise(function(resolve, reject){
   setTimeout(() => {
       pr.innerHTML="Reading Your Files"
       resolve("Promise two resolved")
       console.log(rm1+3000);
   }, (rm1+3000));
})


const thirdPromise = new Promise(function(resolve, reject){
   setTimeout(() => {
       pr.innerHTML="Password Files Detected"
       resolve("Promise third resolved")
       console.log(rm1+6000);
   }, (rm1+8000));
})


const forthPromise = new Promise(function(resolve, reject){
   setTimeout(() => {
       pr.innerHTML="Sending all Passwords and Personal files to server"
       resolve("Promise forth resolved")
       console.log(rm1+6000);
   }, (rm1+11000));
})


const fifthPromise = new Promise(function(resolve, reject){
   setTimeout(() => {
       pr.innerHTML="Cleaning Up"
       resolve("Promise fifth resolved")
       console.log(rm1+6000);
   }, (rm1+15000));
})


const sixthPromise = new Promise(function(resolve, reject){
   setTimeout(() => {
      // alert("Your Device Hacked !")
      setTimeout(() => {
           alert("Your Device have been Hacked !")
        }, 1000);
       pr.innerHTML="Login Grant Successfully !"
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


    let st =  setInterval(() => {
      // let last = document.body.lastElementChild;
      let last = document.querySelector(".para")
      if(last.innerHTML.endsWith("...")){
       last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length-3)
      }
      else {
         last.innerHTML = last.innerHTML + "."
      }
   }, 700);
        
   
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


           clearInterval(st);

       // alert("Your Device Hacked !")




        setInterval(() => {
            pr.innerHTML=" "
           // const html = `<p>Crashed !!!</p>`
           const html = `<p>{
            "login": "Device",
            "id": 156738236,
            "node_id": "U_kgDOCVeivA",
            "avatar_url": "https://avatars.xxxxxxxxusercontent.com/u/156738236?v=4",
            "gravatar_id": "",
            "url": "https://api.xxxxxxxx.com/users/android",
            "html_url": "https://xxxxxxxx.com/android",
            sending all contact...
            "followers_url": "https://api.xxxxxxxx.com/users/android/followers",
            "following_url": "https://api.xxxxxxxx.com/users/android/following{/other_user}",
            "gists_url": "https://api.xxxxxxxx.com/users/android/gists{/gist_id}",
            "starred_url": "https://api.xxxxxxxx.com/users/android/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.xxxxxxxx.com/users/android/subscriptions",
            Sending all files Gallary...
            "organizations_url": "https://api.xxxxxxxx.com/users/android/orgs",
            "repos_url": "https://api.xxxxxxxx.com/users/android/repos",
            "events_url": "https://api.xxxxxxxx.com/users/android/events{/privacy}",
            sending all videos... 
            "received_events_url": "https://api.xxxxxxxx.com/users/android/received_events",
            "type": "User",
            "site_admin": false,
            "name": "android ",
            "company": null,
            "blog": "",
            "location": null,
            sending all private files...
            "email": null,
            "hireable": null,
            "twitter_username": null,
            "public_repos": 1,
            "public_gists": 0,
            "followers": 0,
            Sending Response to Server...
            "following": 0,
            "created_at": "2024-01-16T03:33:42Z",
            "updated_at": "2024-01-16T17:54:28Z"
          }</p>`
           document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html;
        //    console.log(rm1+6000);
       },1000);
        
        // const seventhwt = await seventhPromise
        // console.log(seventhwt);    
}

GetPromise();
