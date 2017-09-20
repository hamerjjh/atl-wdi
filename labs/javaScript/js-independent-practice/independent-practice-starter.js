//  1. Write a function `lengths` that accepts a single parameter as an argument, namely
// an array of strings. The function should return an array of numbers where each
// number is the length of the corresponding string.

// const words = ["hello", "what", "is", "up", "dude"]
function lengths(words){ 
    var lengthAtIndex = [];
    for(var i = 0; i < words.length; i++) {
    lengthAtIndex.push(words[i].length)
}
return lengthAtIndex;
}
length(words)

// 2. Write a Javascript function called `transmogrifier`
// This function should accept three arguments, which you can assume will be numbers.
// Your function should return the "transmogrified" result
//
// The transmogrified result of three numbers is the product of the first two numbers,
// raised to the power of the third number.

// function transmogrifier(a, b, c){
    return (a * b) ** c;
}
console.log(5, 4, 3)

// 3. Write a function `wordReverse` that accepts a single argument, a string. The
// method should return a string with the order of the words reversed. Don't worry
// about punctuation.

// const wordReverse = (sentence) => {
    const split = sentence.split(" ")
    const reversed = split.reverse();
    return reversed.join(" ");
}
console.log(wordReverse("Now I know what a TV dinner feels like"))
console.log(wordReverse("Put Hans back on the line"))
