#!/usr/bin/env node
const [,,command,...args]= process.argv;
const todo = require ('./todo');

switch(command){

    case 'add':
        todo.addTask(args.join(' '));
    break;

    case 'list':
        todo.listTasks();
    break;

    case 'delete':
        todo.deleteTask(parseInt(args[0]));
    break;

    case 'done':
        todo.markDone(parseInt(args[0]));
    break;

    default:
        console.log(`
        Usage:
        node index.js add "Task Name"
        node index.js list
        node index.js done 1
        node index.js delete 1
        `)
}