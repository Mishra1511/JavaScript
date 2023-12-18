let btn=document.querySelector(".btn");

let heading=document.querySelector(".heading");

let mode="light";

btn.addEventListener("click", () => {
    if(mode=='light'){
        document.querySelector("body").style.backgroundColor="black";
        btn.style.backgroundColor="green";
        btn.textContent="Light Mode";
        heading.style.color="white";
        mode = "dark";
    }
    else{
        document.querySelector("body").style.backgroundColor="white";
        btn.style.backgroundColor="black";
        btn.textContent="Dark Mode";
        heading.style.color="black";
        mode = "light";
    }
});