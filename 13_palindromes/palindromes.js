// const palindromes = function (word) {

//     let newWord;
//     if (word[word.length-1] === '!' || word[word.length-1] ==='.') {
//         newWord = word.slice(0,word.length-1);
//     } else {
//         newWord = word
//     }
//     const splitWord = newWord.replaceAll(' ', '').replaceAll(',','');

//     const arr = splitWord.slice(0,splitWord.length).toLowerCase().split('').reverse();

//     const result = arr.join('');

//     for (let i = 0; i < splitWord.length; i++) {
        

//         if (splitWord[i].toLowerCase() !== result[i]) return false
//     }
    
//     return true
// };

const palindromes = function (word) {

    const alphaNumeric = 'abcdefghijklmnopqrstuvwxyz0123456789'

    const filteredWord = word.
        toLowerCase().
        split('').
        filter(letter => alphaNumeric.includes(letter)). 
        join('');

    const reversedWord = filteredWord.split('').reverse().join('')

    return filteredWord === reversedWord


}


// Do not edit below this line
module.exports = palindromes;
