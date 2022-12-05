const fs = require('fs/promises')

async function rockPaperScissors() {
	let map = [0]
	try {
		const data = await fs.readFile(
			'/home/henry/Desktop/Coding Stuff/Advent of Code/Day 2/puzzleInput.txt',
			{
				encoding: 'utf8',
			}
		)
		//PART 1
		//Total Score = sum of scores for each round.
		//Score for each round = shape you selected + outcome of the round.
		//Score for shape selected: 1 - Rock, 2 - Paper, 3 - Scissors
		//Score for outcome: 0 - Lost, 3 - Draw, 6 - Win
		//Find total score according to strategy guide
		let rounds = data.split('\n')
		let score = 0
		for (let i = 0; i < rounds.length; i++) {
			let pChoice = myChoice(rounds[i][2])
			let oChoice = opponentChoice(rounds[i][0])
			//Where player wins
			switch (pChoice) {
				case 'Rock':
					//Lose
					if (oChoice === 'Paper') {
						score += 1
					}
					//Win
					else if (oChoice === 'Scissors') {
						score += 7
					}
					//Draw
					else {
						score += 4
					}
					break
				case 'Paper':
					//Lose
					if (oChoice === 'Scissors') {
						score += 2
					}
					//Win
					else if (oChoice === 'Rock') {
						score += 8
					}
					//Draw
					else {
						score += 5
					}
					break
				case 'Scissors':
					//Lose
					if (oChoice === 'Rock') {
						score += 3
					}
					//Win
					else if (oChoice === 'Paper') {
						score += 9
					}
					//Draw
					else {
						score += 6
					}
					break
			}
		}
		console.log(score)
		//PART 2
		//Total Score = sum of scores for each round.
		//Score for each round = shape you selected + outcome of the round.
		//Score for shape selected: 1 - Rock, 2 - Paper, 3 - Scissors
		//Score for outcome: 0 - Lost, 3 - Draw, 6 - Win
		//Find total score according to strategy guide
		let score2 = 0
		for (let i = 0; i < rounds.length; i++) {
			let gOutcome = gameOutcome(rounds[i][2])
			let oChoice = opponentChoice(rounds[i][0])
			//Where player wins
			switch (gOutcome) {
				case 'Lose':
					if (oChoice === 'Rock') {
						score2 += 3
					} else if (oChoice === 'Paper') {
						score2 += 1
					} else {
						score2 += 2
					}
					break
				case 'Draw':
					if (oChoice === 'Rock') {
						score2 += 1 + 3
					} else if (oChoice === 'Paper') {
						score2 += 2 + 3
					} else {
						score2 += 3 + 3
					}
					break
				case 'Win':
					if (oChoice === 'Rock') {
						score2 += 2 + 6
					} else if (oChoice === 'Paper') {
						score2 += 3 + 6
					} else {
						score2 += 1 + 6
					}
					break
			}
		}
		console.log(score2)
	} catch (err) {
		console.log(err)
	}
}

function gameOutcome(input) {
	switch (input) {
		case 'X':
			return 'Lose'
		case 'Y':
			return 'Draw'
		case 'Z':
			return 'Win'
	}
}

function myChoice(input) {
	switch (input) {
		case 'X':
			return 'Rock'
		case 'Y':
			return 'Paper'
		case 'Z':
			return 'Scissors'
	}
}

function opponentChoice(input) {
	switch (input) {
		case 'A':
			return 'Rock'
		case 'B':
			return 'Paper'
		case 'C':
			return 'Scissors'
	}
}
rockPaperScissors()
