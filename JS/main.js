// let btn=document.createElement("button");
// btn.innerText="Click Me!";
// btn.style.backgroundColor="red";
// btn.style.color="white";

// document.querySelector("body").prepend(btn);


let red=document.querySelector(".red");
let blue=document.querySelector(".blue");
let yellow=document.querySelector(".yellow");
let green=document.querySelector(".green");
let black=document.querySelector(".black");


red.addEventListener("click", ()=>{
        document.querySelector("body").style.backgroundColor="red";
});

blue.addEventListener("click", ()=>{
    document.querySelector("body").style.backgroundColor="blue";
});

yellow.addEventListener("click", ()=>{
    document.querySelector("body").style.backgroundColor="#ffdb58";
});

green.addEventListener("click", ()=>{
    document.querySelector("body").style.backgroundColor="green";
});

black.addEventListener("click", ()=> {
    document.querySelector("body").style.backgroundColor="black";
})