class MemoryGame {
	constructor() {
		this.cards = [];
		this.flippedCards = [];
		this.matchedPairs = 0;
		this.moves = 0;
		this.score = 0;
		this.isProcessing = false;
		this.gridSize = '4x3';
	}

	init(gridSize) {
		this.gridSize = gridSize;
		this.cards = [];
		this.flippedCards = [];
		this.matchedPairs = 0;
		this.moves = 0;
		this.score = 0;
		this.isProcessing = false;

		const [cols, rows] = gridSize.split('x').map(Number);
		const totalCards = cols * rows;
		const pairs = totalCards / 2;

		const numbers = [];
		for (let i = 1; i <= pairs; i++) {
			numbers.push(i, i);
		}

		this.cards = this.shuffle(numbers);
		this.renderBoard();
		this.updateScore();
	}

	shuffle(array) {
		const shuffled = [...array];
		for (let i = shuffled.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
		}
		return shuffled;
	}

	renderBoard() {
		const gameBoard = document.getElementById('game-board');
		gameBoard.innerHTML = '';
		gameBoard.className = `game-board grid-${this.gridSize}`;

		this.cards.forEach((number, index) => {
			const card = document.createElement('div');
			card.className = 'card';
			card.dataset.index = index;
			card.dataset.number = number;

			const cardFront = document.createElement('div');
			cardFront.className = 'card-front';
			cardFront.textContent = '?';

			const cardBack = document.createElement('div');
			cardBack.className = 'card-back';
			cardBack.textContent = number;

			card.appendChild(cardFront);
			card.appendChild(cardBack);

			card.addEventListener('click', () => this.flipCard(card));

			gameBoard.appendChild(card);
		});
	}

	flipCard(card) {
		if (this.isProcessing) return;
		if (card.classList.contains('flipped')) return;
		if (card.classList.contains('matched')) return;
		if (this.flippedCards.length >= 2) return;

		card.classList.add('flipped');
		this.flippedCards.push(card);

		if (this.flippedCards.length === 2) {
			this.moves++;
			this.updateScore();
			this.checkMatch();
		}
	}

	checkMatch() {
		this.isProcessing = true;
		const [card1, card2] = this.flippedCards;
		const number1 = card1.dataset.number;
		const number2 = card2.dataset.number;

		if (number1 === number2) {
			setTimeout(() => {
				card1.classList.add('matched');
				card2.classList.add('matched');
				this.matchedPairs++;
				this.score += 10;
				this.updateScore();
				this.flippedCards = [];
				this.isProcessing = false;

				if (this.matchedPairs === this.cards.length / 2) {
					setTimeout(() => {
						alert(`恭喜完成遊戲！\n總分：${this.score}\n步數：${this.moves}`);
					}, 500);
				}
			}, 500);
		} else {
			setTimeout(() => {
				card1.classList.remove('flipped');
				card2.classList.remove('flipped');
				this.flippedCards = [];
				this.isProcessing = false;
			}, 1000);
		}
	}

	updateScore() {
		document.getElementById('score').textContent = this.score;
		document.getElementById('moves').textContent = this.moves;
	}
}

const game = new MemoryGame();

document.getElementById('start-game-btn').addEventListener('click', () => {
	const gridSize = document.getElementById('grid-size').value;
	document.getElementById('welcome-screen').style.display = 'none';
	document.getElementById('game-screen').style.display = 'block';
	game.init(gridSize);
});

document.getElementById('restart-btn').addEventListener('click', () => {
	const gridSize = document.getElementById('grid-size').value;
	game.init(gridSize);
});
