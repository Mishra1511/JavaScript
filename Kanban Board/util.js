function attachdrag(task){
    if(!task) return;

    task.addEventListener('dragstart', (e)=>{
        task.classList.add('is-dragging');
    });

    task.addEventListener('dragend', (e)=>{
        task.classList.remove('is-dragging');
    });
}


function updateToLocalStorage() {
    const todoList = document.querySelector("#todo-lane").querySelectorAll(".task");
    const progressList = document.querySelector("#doing-lane").querySelectorAll(".task");
    const doneList = document.querySelector("#done-lane").querySelectorAll(".task");

    const doneTexts = []
    for(const tasks of doneList) {
        doneTexts.push(tasks.innerText);
    }
    const todoTexts = []
    for(const tasks of todoList) {
        todoTexts.push(tasks.innerText);
    }
    const progressTexts = []
    for(const tasks of progressList) {
        progressTexts.push(tasks.innerText);
    }
    localStorage.setItem("done", JSON.stringify(doneTexts))
    localStorage.setItem("progress", JSON.stringify(progressTexts))
    localStorage.setItem("todo", JSON.stringify(todoTexts))
}

