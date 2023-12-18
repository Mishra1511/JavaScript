let boxs=document.querySelectorAll(".boxs");
let msgcontainer=document.querySelector(".messgaediv");
let msg=document.getElementById("msg");
let container=document.querySelector(".container");
let resetbtn=document.querySelector(".resetgame");
let newGameBtn=document.querySelector(".newgame");

const winningcombo=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

let p1=true;
let count=0;

boxs.forEach((box) =>{
    box.addEventListener("click", () =>{
        if(p1){
            box.innerText="X";
            p1=false;
        }
        else{
            box.innerText="0";
            p1=true;
        }
        box.disabled=true;
        count++;

        let isWinner = checkwinner();

        if (count === 9 && !isWinner) {
            gameDraw();
        }
    });
});

const gameDraw = () =>{
    setTimeout(() =>{
    msg.innerText=`The last game was a draw =_=`;
    msgcontainer.classList.remove("hide");
    container.classList.add("hide");
    resetbtn.classList.add("hide")
    },300);
};

const checkwinner= () =>{
    for(let winning of winningcombo){
        let index1=boxs[winning[0]].innerText;
        let index2=boxs[winning[1]].innerText;
        let index3=boxs[winning[2]].innerText;

        if(index1!="" && index2!="" && index2!=""){
            if(index1 === index2 && index2 === index3){
                showwinner(index1);
                return true;
            }
        }
    }
};

let showwinner=(winner) =>{
    setTimeout(() => {
    msg.innerText=`Congratulation!! The winner of the last game was ${winner}`;
    msgcontainer.classList.remove("hide");
    container.classList.add("hide");
    resetbtn.classList.add("hide")
    },300);
};

let enablebuttons= ()=>{
    for (let box of boxs) {
        box.disabled = false;
        box.innerText = "";
      }
};

const resetGame= () =>{
    p1=true;
    count=0;
    enablebuttons();
    msgcontainer.classList.add("hide");
    container.classList.remove("hide");
    resetbtn.classList.remove("hide")
};


newGameBtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);


