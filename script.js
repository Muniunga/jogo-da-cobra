let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
  x: 8 * box,
  y: 8 * box
};

function criarBg() {
  context.fillStyle = "lightgreen";
  context.fillRect(0, 0, 16 * box, 16 * box);
}

function criarCobrinha(params) {
  for (let i = 0; i < snake.length; i++) {
    context.fillStyle = "green";
    context.fillRect(snake[i].x, snake[i].y, box, box);
  }
}

function iniciarJogo() {
  criarBg();
  criarCobrinha();

  let snakeX = snake[0].x;
  let snakeY = snake[0].y;
  let direction;
  if (direction == "right") snakeX += box;
  if (direction == "left") snakeX -= box;
  if (direction == "up") snakeX -= box;
  if (direction == "down") snakeX += box;

  snake.pop();

  let newHead = {
    x: snakeX,
    y: snakeY
  };
  snake.unshift(newHead);
}

let jogo = setInterval(iniciarJogo, 100);
