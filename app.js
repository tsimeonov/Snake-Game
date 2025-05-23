// Define HTML elements

const board = document.getElementById('game-board');

// Define game variables

let snake = [{ x: 10, y: 10 }];
let food = generateFood();

// Draw game map, snake, food
function draw() {
	board.innerHTML = '';
	drawSnake();
}

// Draw snake

function drawSnake() {
	snake.forEach((segment) => {
		const snakeElement = createGameElement('div', 'snake');
		setPosition(snakeElement, segment);
		board.appendChild(snakeElement);
	});
}

// Create a snake or food cube/div

function createGameElement(tag, className) {
	const element = document.createElement(tag);
	element.className = className;
	return element;
}

// Set the position of snake or food
function setPosition(element, position) {
	element.style.gridColumn = position.x;
	element.style.gridRow = position.y;
}

// Testing draw function

// draw();

function drawFood() {
	const foodElement = createGameElement('div', 'food');
	setPosition(foodElement, food);
}

function generateFood() {}
