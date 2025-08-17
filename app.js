let btn=document.querySelector("button");
btn.addEventListener("click",function() {
    let h3=document.querySelector("h3");
    let clr=getRandomColor();
    h3.innerText=clr;

    let div=document.querySelector("div");
    div.style.backgroundColor=clr;

    console.log("color updated");
})

function getRandomColor(){
    //rgb (0-255)
    let red=Math.floor(Math.random()*256);
    let green=Math.floor(Math.random()*256);
    let blue=Math.floor(Math.random()*256);

    let color=`rgb(${red},${green},${blue})`;
    return color;
}