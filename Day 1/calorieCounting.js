const fs = require('fs/promises')

async function findHighestCalories() {
	let map = [0]
	try {
		const data = await fs.readFile(
			'/home/henry/Desktop/Coding Stuff/Advent of Code/Day 1/puzzleInput.txt',
			{
				encoding: 'utf8',
			}
		)
		//PART 1
		//Spils file input into an array
		let tmp = data.split('\n')
		//Loops through the tmp array
		for (let i = 0, j = 0; i < tmp.length; i++) {
			//If current map item is blank then
			//Increment the current j pointer by 1
			//And push a new zero value into the map
			if (tmp[i] === '') {
				j++
				map.push(0)
			}
			//Else just add keep adding values to the currently
			//Selected element in the map.
			else {
				map[j] += parseInt(tmp[i])
			}
		}
		//Returns the highest number of calories
		console.log(Math.max(...map))

		//PART 2
		//Sorts the map into descending order
		map.sort((a, b) => b - a)
		//Sums the top 3 biggest values in the map
		console.log(map[0] + map[1] + map[2])
	} catch (err) {
		console.log(err)
	}
}

findHighestCalories()
