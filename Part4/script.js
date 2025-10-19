const taskTitle = document.getElementById("taskTitle");
const taskDesc = document.getElementById("taskDesc");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

let tasks = [];

addBtn.addEventListener("click", () => {
    const title = taskTitle.value.trim();
    const desc = taskDesc.value.trim();

    if (title === "") {
        alert("Enter name of task!");
        return;
    }

    const task = { title, desc, completed: false };
    tasks.push(task);

    taskTitle.value = "";
    taskDesc.value = "";
    renderTasks();
});

function renderTasks() {
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");

        const titleEl = document.createElement("div");
        titleEl.textContent = task.title;
        titleEl.className = "title";

        const descEl = document.createElement("div");
        descEl.textContent = task.desc;
        descEl.className = "desc";

        if (task.completed) li.classList.add("completed");

        li.addEventListener("click", () => {
            task.completed = !task.completed;
            renderTasks();
        });

        const delBtn = document.createElement("button");
        delBtn.textContent = "Delete";
        delBtn.className = "deleteBtn";
        delBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            tasks.splice(index, 1);
            renderTasks();
        });

        li.append(titleEl, descEl, delBtn);
        taskList.appendChild(li);
    });
}