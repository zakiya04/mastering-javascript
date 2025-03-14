let board = document.getElementById("board");
let ctx = board.getContext("2d");
ctx.fillStyle = "green";
ctx.fillRect(0, 0, board.width, board.height);

let snake = [{ x: 50, y: 50 }];
let food = { x: 220, y: 250 };
let direction = "RIGHT";
let speed = 20;
let score = 0;


document.addEventListener("keydown", changeDirection);

function changeDirection(event) {
  if (event.keyCode == 37 && direction != "RIGHT") direction = "LEFT";
  else if (event.keyCode == 38 && direction != "DOWN") direction = "UP";
  else if (event.keyCode == 39 && direction != "LEFT") direction = "RIGHT";
  else if (event.keyCode == 40 && direction != "UP") direction = "DOWN";
}
function startGame(){
  game  = setInterval(drawGame, 200);
}
startGame()

function drawGame() {

  ctx.fillStyle = "green";
  ctx.fillRect(0, 0, board.width, board.height); //fill background//

 if(
  snake[0].x < food.x + 20 &&
  snake[0].x + 20 > food.x &&
  snake[0].y < food.y + 20 &&
  snake[0].y + 20 > food.y
  ){
    food = {
      x: Math.floor(Math.random() * (board.width - 20) / 20) * 20,
      y: Math.floor(Math.random() * (board.height - 20) / 20) * 20
    };
    snake.push({})
  }

  if(direction == 'LEFT') snake[0].x -= speed;
  if(direction == 'RIGHT') snake[0].x += speed;
  if(direction == 'UP') snake[0].y -= speed;
  if(direction == 'DOWN') snake[0].y += speed;

  for(let i = snake.length - 1 ; i>0 ; i--){
    snake[i].x = snake[i-1].x;
    snake[i].y = snake[i-1].y;
  }

  for(let i = 0; i < snake.length ; i++){
    ctx.fillStyle = 'black';
    ctx.fillRect(snake[i].x , snake[i].y ,28, 28)
  }

  ctx.fillStyle = "red";
  ctx.fillRect(food.x, food.y, 25, 25);
  collision()
}

function collision() {
  if (
    snake[0].x >= board.width ||
    snake[0].y >= board.height ||
    snake[0].x < 0 ||
    snake[0].y < 0
  ) {
    clearInterval(game);
    alert("Game Over!");
  }
  if (snake[0].x === food.x && snake[0].y === food.y){
    snake.push({x: snake[0].x + speed ,y: snake[0].y})
  }
}
// motion of the snake//





