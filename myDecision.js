var output = document.querySelector('.tasks');

var source = document.getElementById('output').innerHTML;
var template = Handlebars.compile(source);

var taskTable = document.querySelector('.tasks');

output.innerHTML = template({
    tasks: tasks
});

var tasks = [];
var taskId = 0;
if (localStorage.getItem("tasks")){
    tasks = JSON.parse(localStorage.getItem("tasks"))
}
taskTable.innerHTML = template({
  tasks : tasks
})
function addText() {
    var input = document.querySelector('#textField').value;
    taskId += 1;
    tasks.push({
        id: taskId,
        taskName: input,
        todo: true,
        doing: false,
        done: false
    });
    var table = template({
        tasks: tasks
    });
    output.innerHTML = table;
}

taskTable.addEventListener('click', function(evt) {

    var clickOnTaskId = evt.target.dataset.taskId
    var buttonType = evt.target.dataset.buttonType;

    //Find the Task that was clicked on...
    var task = null;
    for (var i = 0; i < tasks.length; i++) {
        if (tasks[i].id === Number(clickOnTaskId)) {
            task = tasks[i]
        }
    }

    if (buttonType === "todo") {
        task.todo = false;
        task.doing = true;
        task.done = false;
    }
    else if (buttonType === "doing"){
      task.todo = false;
      task.doing = false;
      task.done = true;
    }

    output.innerHTML = template({
        tasks: tasks
    });

   localStorage.setItem("tasks", JSON.stringify(tasks));
    storedtask = JSON.parse(localStorage.getItem("tasks"));

});

var resetbtn = document.getElementByName('resetBtn');
resetbtn.addEventListener('click',reset)

function reset(){
  localStorage.tasks = ""
  taskTable.innerHTML = template({
    tasks : tasks
  })

}
