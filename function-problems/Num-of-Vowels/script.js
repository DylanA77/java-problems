// create a function that will find the number of vowels in a string
function vowelCount(str) {
	// variable defining vowels
	const vowels = ['a', 'e', 'i', 'o', 'u'];
	//split each letter in the string
	const strSplit = str.lowerCase().split('');
	//vowel counter
	let currentVowelCount = 0
	//write the for loop
	for (x = 0; x < strSplit.length; x++) {
		if (vowels.includes(strSplit[x])) {
			currentVowelCount += 1;
		}
	}

	return currentVowelCount;
}

console.log(vowelCount('How many vowels are in this string?'));