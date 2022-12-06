const e = require('express')
const fs = require('fs/promises')

async function rucksackRegorg() {
	try {
		const data = await fs.readFile(
			'/home/henry/Desktop/Coding Stuff/Advent of Code/Day 3/puzzleInput.txt',
			{
				encoding: 'utf8',
			}
		)
		const items = data.split('\n')
		//PART 1
		const itemKey = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
		let totalPrio = 0
		//Loop through the items in the rucksack
		for (let item of items) {
			//Divide the items into 2 equal length items
			const fItem = item.slice(0, item.length / 2)
			const sItem = item.slice(item.length / 2)
			//Loop through each letter of the first item
			for (let letter of fItem) {
				//If letter is included in the second item
				//Add to total priority
				if (sItem.includes(letter)) {
					totalPrio += itemKey.indexOf(letter) + 1
					break
				}
			}
		}
		console.log(totalPrio)
		//PART 2
		//Groups of 3
		let totalPrio2 = 0
		//Loop through and increment by 3
		for (let i = 0; i < items.length - 3; i += 3) {
			const currWord = items[i]
			//Loop through first word in the group of three
			for (const letter of currWord) {
				//If letter is in the other two in the group
				//Increment totalPrio2 by 1
				if (
					items[i + 1].includes(letter) &&
					items[i + 2].includes(letter)
				) {
					totalPrio2 += itemKey.indexOf(letter) + 1
					break
				}
			}
		}
		console.log(totalPrio2)
	} catch (err) {
		console.log(err)
	}
}

rucksackRegorg()
