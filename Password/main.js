let btn=document.querySelector(".btn");
let input=document.querySelector(".pass");
let baton="Show";

btn.addEventListener("click", () =>{
    if(baton === "Show"){
        btn.textContent="Hide";
        baton="Hide";
        input.setAttribute('type','text');
    }
    else{
        btn.textContent="Show";
        baton="Show";
        input.setAttribute('type','password');
    }
});