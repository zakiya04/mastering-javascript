let board = document.getElementById('board');
let ctx = board.getContext('2d');
ctx.fillStyle = 'green';
ctx.fillRect(0,0, board.width, board.height);

let snake = [{x: 50 ,y:50}];
let direction = 'right';
let speed = 2;

function showSnake(){
  ctx.fillStyle ='black';
  ctx.fillRect(snake[0].x,snake[0].y, 30, 30)
}
function moveSnake(){
   ctx.clearRect(0,0, board.width, board.height); //clear background//
   ctx.fillStyle = 'green'; 
   ctx.fillRect(0,0, board.width, board.height); //fill background//
   snake.forEach((pos) => {
    pos.x += speed;
   })
   showSnake()
}
// motion of the snake//
function gameLoop(){
    moveSnake();
    requestAnimationFrame(gameLoop)
}
gameLoop()
