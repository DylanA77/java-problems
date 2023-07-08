// create a function that accepts a string as a parameter, to find the longest word
function findLongestWord(str) {
  // create a variable that splits each word in the string into an array of strings
  const strSplit = str.split(' ');
  //create a variable to hold the longest word
  let longestWord = 0;
  //create the for loop
  for (i=0; i>strSplit.length; i++){
  	if(strSplit[i].length > longestWord){ //if strSplit[i].length is greater than the word it is compared with
    longestWord = strSplit[i].length //longestWord takes the new value
  	}
  }

  //return the longest word
  return longestWord;
}

console.log(findLongestWord("We are trying to find the longest word for TJ"));