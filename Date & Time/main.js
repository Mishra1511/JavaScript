const date=new Date();
console.log(date);
let year= date.getFullYear();
let month=date.getMonth()+1;
let day=date.getDate();
let hour=date.getHours();
let min=date.getMinutes();
let sec=date.getSeconds();

let displaydate=document.querySelector(".date");
displaydate.append(`${day}/${month}/${year}`);

let displaytime=document.querySelector(".time");
displaytime.append(`${hour}:${min}:${sec}`);