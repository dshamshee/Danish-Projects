const clock = document.querySelector('#clock')


setInterval(function(e){
  const date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.textContent = date.toLocaleTimeString();
},1000);