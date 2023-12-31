let boards=document.querySelectorAll('.tasks-lane');
let newtask=document.querySelectorAll(".additem");
let tasks=document.querySelectorAll(".task");

newtask.forEach( btn =>{
    btn.addEventListener('click',()=>{
        let newinput=prompt('Enter the new task!');
        if(newinput.trim()){
            const taskWrapper = document.createElement('p');
            taskWrapper.setAttribute('draggable','true');
            taskWrapper.textContent = newinput;
            taskWrapper.classList.add('task');
            attachdrag(taskWrapper);
            btn.parentNode.appendChild(taskWrapper);
        }
        else
        alert("Enter a valid task!!");
        
      });
    });

tasks.forEach(task =>{
    attachdrag(task);
});


boards.forEach(board =>{
    board.addEventListener('dragover',(e)=>{
        const task=document.querySelector('.is-dragging');
        const closestelement = getclosestsibling(board,e.clientY);

        if(closestelement){
            board.insertBefore(task,closestelement);
        }else{
            board.appendChild(task);
        }
    })
});

const getclosestsibling = (board,yAxis)=>{
    const taskontheboard=board.querySelectorAll('.task:not(.is-dragging)');
    let closestsibling=null;
    let mindistance=Number.NEGATIVE_INFINITY;

    taskontheboard.forEach(task =>{
        const boundry=task.getBoundingClientRect();
        const top=boundry.top;
        const distane=yAxis-top;

        if(distane<0 && mindistance < distane){
            mindistance=distane;
            closestsibling=task;
        }
    });
    return closestsibling;
}
    function applySearchFunctionality() {
        const searchInput = document.querySelector(".search");
        const tasks = document.querySelectorAll(".task");
    
        searchInput.addEventListener('input', () => {
            const searchText = searchInput.value.toLowerCase();
            tasks.forEach(task => {
                if (!task.textContent.toLowerCase().includes(searchText))
                    task.style.display = "none";
                else
                    task.style.display = "block";
            });
        });
    }

const save=document.querySelector('.save');

save.addEventListener('click',() =>{
    updateToLocalStorage();
    alert('Tasks saved!');
});


  function initData() {
    const doneTexts = JSON.parse(localStorage.getItem("done"));
    const progressTexts = JSON.parse(localStorage.getItem("progress"));
    const todoTexts = JSON.parse(localStorage.getItem("todo"));
    const todoList = document.querySelector("#todo-lane");
    const progressList = document.querySelector("#doing-lane");
    const doneList = document.querySelector("#done-lane");

    for (const text of doneTexts) {
      addTaskToContainer(doneList, text);
    }

    for (const text of todoTexts) {
      addTaskToContainer(todoList, text);
    }
    for (const text of progressTexts) {
      addTaskToContainer(progressList, text);
    }
    applySearchFunctionality();
  }

  function addTaskToContainer(container, value) {
    const p = document.createElement("p");
    p.setAttribute('draggable', 'true');
    p.classList.add("task");
    p.innerText = value;
    attachdrag(p);
    container.appendChild(p);
}

  initData();



