function createCard(title, cName, views, monthOld, duration, thumbnail) {
    // Finish this Function 
    let viewstr
    if (views < 1000) {
        viewstr = views / 1000;
    }

    else if (views > 1000000) {
        viewstr = views / 1000000 + "M";
    }

    else {
        viewstr = views / 1000 + "K";
    }



    let html = ` <div class="card">
    <div class="thumb">
<img src="${thumbnail}" alt="">
<b class="capsule">${duration}</b>
    </div>

<div class="head">
    <strong>${title}</strong>
    <p>${cName} . ${viewstr} Views . ${monthOld} Months ago</p>
</div>

</div>`

document.querySelector(".container").innerHTML=  document.querySelector(".container").innerHTML + html;
}


document.querySelector(".btn").addEventListener('click', ()=>{

    let titl = document.querySelector("#tl").value;
    let chl = document.querySelector("#cl").value;
    let viw = document.querySelector("#vw").value;
    let mon = document.querySelector("#mn").value;
    let tim = document.querySelector("#tm").value;

    // console.log(titl, chl, viw, mon, tim);

    createCard(titl, chl, viw, mon, tim, "https://source.unsplash.com/random/1920x1080/?webdevelopment,laptops")


    // createCard("Introduction to Backend | Sigma web dev 72", "codewithHarry", 5600000, 7, "31:20", "https://source.unsplash.com/random/1920x1080/?webdevelopment,laptops")
})


// createCard("Introduction to Backend | Sigma web dev 72", "codewithHarry", 5600000, 7, "31:20", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDxR2Iy74ubFQvvf2uP0BepdJ_GNw")
