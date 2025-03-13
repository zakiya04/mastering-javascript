let board = document.getElementById("board");
let ctx = board.getContext("2d");
ctx.fillStyle = "green";
ctx.fillRect(0, 0, board.width, board.height);

let snake = [{ x: 50, y: 50 }];
let food = { x: 220, y: 250 };
let direction = "right";
let speed = 20;
let score = 0;

document.addEventListener("keydown", changeDirection);

function changeDirection(event) {
  if (event.keyCode == 37 && direction != "RIGHT") direction = "LEFT";
  else if (event.keyCode == 38 && direction != "DOWN") direction = "UP";
  else if (event.keyCode == 39 && direction != "LEFT") direction = "RIGHT";
  else if (event.keyCode == 40 && direction != "UP") direction = "DOWN";
}

function drawGame() {
  ctx.clearRect(0, 0, board.width, board.height); //clear background//

  ctx.fillStyle = "green";
  ctx.fillRect(0, 0, board.width, board.height); //fill background//

  if(direction == 'LEFT') snake[0].x -= speed;
  if(direction == 'RIGHT') snake[0].x += speed;
  if(direction == 'UP') snake[0].y -= speed;
  if(direction == 'DOWN') snake[0].y += speed;


  ctx.fillStyle = "black";
  ctx.fillRect(snake[0].x, snake[0].y, 28, 28);

  ctx.fillStyle = "red";
  ctx.fillRect(food.x, food.y, 25, 25);
}

function collision() {
  if (
    snake[0].x >= board.width ||
    snake[0].y >= board.height ||
    snake[0].x < 0 ||
    snake[0].y < 0
  ) {
    clearInterval(game);
  }
  if (snake[0].x === food.x && snake[0].y === food.y){
    snake.push({x: snake[0].x + speed ,y: snake[0].y})
  }
}
function changeDirection() {}
// motion of the snake//
let game = setInterval(drawGame, 600);
