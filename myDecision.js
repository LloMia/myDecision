var output = document.querySelector('.tasks');

var source = document.getElementById('output').innerHTML;
var template = Handlebars.compile(source);

var taskTable = document.querySelector('.tasks');

output.innerHTML = template({
    tasks: tasks
});

var tasks = [];

taskTable.addEventListener('click', function(evt) {

      //alert(evt.target.dataset.taskId);

      var clickOnTaskId = evt.target.dataset.taskId;

      //alert(clickOnTaskId);

      //find the task for the clickOnTaskId in tasks
      var task = null;

      for (var i = 0; i < tasks.length; i++) {
          if (tasks[i].id === Number(clickOnTaskId)) {
              task = tasks[i]
          }
      }

      //update it's state to doing

      if (task) {
          task.todo = false;
          task.doing = true;
          task.done = false;
      }
      //re-render the screen
      output.innerHTML = template({
          tasks: tasks
      });

});

var taskId = 0;

function addText() {
    var input = document.querySelector('#textField').value;
    //console.log(input);

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

function start() {
    alert("add not found")
    if (tasks.input === tasks.todo) {
        tasks.classList.add(tasks.doing)
    }
}
