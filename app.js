new Set([1,1,2,2,3,4]) // [1,2,3,4]



// [...new Set("referee")].join("") // ref


let m = new Map();
m.set([1,2,3], true); // key: [1,2,3], value: true
m.set([1,2,3], false); // key [1,2,3], value: false


const hasDuplicate = arr => new Set(arr).size !== arr.length	

hasDuplicate([1,3,2,1]) // true
hasDuplicate([1,5,-1,4]) // false

function isVowel(vowel) {
	return 'aeiou'.includes(vowel);
}

const vowelCounts = word => {
	let Vowels = new Map();
	for(let char of word) {
		let lowerCaseVowels = char.toLowerCase();
		if(isVowel(lowerCaseVowels)) {
			if(Vowels.has(lowerCaseVowels)){
				Vowels.set(lowerCaseVowels, Vowels.get(lowerCaseVowels) + 1)
			}else {
				Vowels.set(lowerCaseVowels, 1);
			}
		}
	} 
	return Vowels;
}