let lines=document.querySelector(".lines");

lines.addEventListener("click", () =>{
  document.querySelector(".outer").style.visibility="visible";
  lines.style.visibility="hidden";
});