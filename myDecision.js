var output = document.querySelector('.output');

var source = document.getElementById('output').innerHTML;
var template = Handlebars.compile(source);

var tasks = [
  // {taskName: 'Task 1', todo: false, doing: true, done: false},
  // {taskName: 'Task 2', todo: false, doing: false, done: true}
];

function addText() {
  var input = document.querySelector('#textField').value;
  console.log(input);

  tasks.push({taskName: input, todo: true, doing: false, done: false});
  var table = template({tasks: tasks });
  output.innerHTML = table;
}
