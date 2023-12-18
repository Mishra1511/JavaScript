

let btn=document.querySelector("button");

btn.addEventListener("click",() =>{
let height=document.querySelector("#height");
const h=parseFloat(height.value);

let weight=document.querySelector("#weight");
const w=parseFloat(weight.value);

const bmi=(w/(h*h)).toFixed(2);
    alert(`The BMI is: ${bmi}`);
});
