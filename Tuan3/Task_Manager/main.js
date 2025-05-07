var taskInput = document.getElementById("taskInput");
var addBtn = document.getElementById("addBtn");
var taskList = document.getElementById("taskList");
var tasks = [];
function renderTasks() {
    taskList.innerHTML = " ";
    tasks.forEach(function (task) {
        var li = document.createElement("li");
        li.textContent = task.title;
        li.className = task.completed ? "done" : " ";
        li.onclick = function () {
            task.completed = !task.completed;
            renderTasks();
        };
        var delBtn = document.createElement("button");
        delBtn.textContent = "❌";
        delBtn.onclick = function (e) {
            e.stopPropagation();
            tasks = tasks.filter(function (t) { return t.id !== task.id; });
            renderTasks();
        };
        li.appendChild(delBtn);
        taskList.appendChild(li);
    });
}
addBtn.onclick = function () {
    var title = taskInput.value.trim();
    if (title) {
        tasks.push({ id: Date.now(), title: title, completed: false });
        renderTasks();
    }
};
