// Define HTML elements

const board = document.getElementById('game-board');

// Define game variables

let snake = [{ x: 10, y: 10 }];

// Draw game map, snake, food
function draw() {
	board.innerHTML = '';
	drawSnake();
}

// Draw snake

function drawSnake() {}
