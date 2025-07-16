const fs = require('fs');
const path ='./tasks.json';

function loadTasks(){
  if(!fs.existsSync(path)) fs.writeFileSync(path,'[]');
  const data = fs.readFileSync(path,'utf-8');
  return JSON.parse(data)
}

function saveTasks(task){
  fs.writeFileSync(path, JSON.stringify(task,null,2));
}

function addTask(task){
  const tasks = loadTasks();
  tasks.push({task, done:false});
  saveTasks(tasks);
  console.log('✅ Added To Tasks')
}

function listTasks(){
  const tasks = loadTasks();
  if (tasks.length === 0) return console.log('No task has been added');
  tasks.forEach((t,i)=>{
    const status = t.done ? '✅' : '🕒';
    console.log(`${i + 1}: ${status} ${t.task}`)
  })
}

function markDone(index){
    const tasks = loadTasks();
    if (index < 1 || index > tasks.length) return console.log('Invalid task number');
    tasks[index - 1].done = true;
    saveTasks(tasks);
    console.log(`task #${index} is completed!!`)
}

function deleteTask(index){
    const tasks = loadTasks();
    if (index < 1 || index > tasks.length) return console.log('Invalid Task Number');
    const removed = tasks.splice(index - 1,1);
    saveTasks(tasks);
    console.log(`Deleted:"${removed[0].task}"`)
}

module.exports = { addTask, listTasks, markDone, deleteTask };