// const removeFromArray = function(arr, ...args) {
//         for (let arg of args) {
//             if (arr.includes(arg)) {
//         const leftIndex = arr.findIndex(item => item == arg)
//         const rightIndex = arr.findLastIndex(item => item == arg)
//         arr.splice(leftIndex, rightIndex - leftIndex + 1)
//             }
//         }
//     return arr       
// };

// const removeFromArray = function(arr, ...args) {
//     return arr.filter(item => !args.includes(item))
// }

const removeFromArray = function(arr, ...args) {
    const result = []
    arr.forEach(item => {
        if (!args.includes(item)) {
            result.push(item)
        }
    })
    return result
}
// Do not edit below this line
module.exports = removeFromArray;

// find all the indexes of the