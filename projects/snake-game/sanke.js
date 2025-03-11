let board = document.getElementById('board');
let ctx = board.getContext('2d');
ctx.fillStyle = 'green';
ctx.fillRect(0,0, board.width, board.height);

let snake = [{x: 50 ,y:50}];
let direction = 'right'

function moveSnake(){
    snake.forEach((position) =>{
        ctx.fillStyle = 'black';
        ctx.fillRect(position.x , position.y , 20, 20)
    })
}
moveSnake()