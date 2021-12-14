
const arrayOf = [1, 4, 5, 8, 5, 1, 2, 7, 5, 2, 11];
let countNum = 0;

function linearSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        countNum += 1
        if (array[i] === item) {
            return i;
        }
    }
    return null
}
 
console.log(linearSearch(arrayOf, 1))
console.log('count = ', countNum)