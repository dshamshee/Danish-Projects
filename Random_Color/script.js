let rm = document.querySelector(".container").children

function GetRandomColor(){
    let val1 = Math.floor(0+Math.random()*255)
    console.log(val1)
    let val2 = Math.floor(0+Math.random()*255)
    console.log(val2) 
    let val3 = Math.floor(0+Math.random()*255)
    console.log(val3)
    return `rgb(${val1}, ${val2}, ${val3})`
}

Array.from(rm).forEach(e=>{
    e.style.backgroundColor=GetRandomColor()
    e.style.color=GetRandomColor()
})
