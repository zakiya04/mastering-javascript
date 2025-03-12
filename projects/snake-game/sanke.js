let board = document.getElementById('board');
let ctx = board.getContext('2d');
ctx.fillStyle = 'green';
ctx.fillRect(0,0, board.width, board.height);

let snake = [{x: 50 ,y:50}];
let food = [{x: 220, y: 250}];
let direction = 'right';
let speed = 20;
let score = 0;

function showSnake(){
  ctx.fillStyle ='black';
  ctx.fillRect(snake[0].x,snake[0].y, 28, 28)
}
function moveSnake(){
   let snakeX = snake[0].x;
   let snakeY = snake[0].y;
   ctx.clearRect(0,0, board.width, board.height); //clear background//
   ctx.fillStyle = 'green'; 
   ctx.fillRect(0,0, board.width, board.height); //fill background//
   snake.forEach((pos) => {
    pos.x += speed;
   })
   showSnake();
   ctx.fillStyle = 'red';
   ctx.fillRect(food[0].x, food[0].y, 25, 25)
   if(snakeX > board.width || snakeY > board.height){
    clearInterval(game)
   }
}
function collison(){

}
// motion of the snake//
let game = setInterval(moveSnake, 600);
