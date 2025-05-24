// Define HTML elements

const board = document.getElementById('game-board');

// Draw game map, snake, food
function draw() {
	board.innerHTML = '';
	drawSnake();
}
