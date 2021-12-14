const array1 = [0, 3, 2, 5, 6, 8, 23, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3, 32, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23,]
let count1 = 0

function quickSort(array) {
    if (array.length <= 1) {
        return array
    }
    let pivotIndex = Math.floor(array.length / 2);
    let pivot = array[pivotIndex]
    let less = []
    let greater = []
    for (let i = 0; i < array.length; i++) {
        count1 += 1
        if (i === pivotIndex)
            continue
        if (array[i] < pivot) {
            less.push(array[i])
        } else {
            greater.push(array[i])
        }
    }
    return [...quickSort(less), pivot, ...quickSort(greater)]
}

console.log(quickSort(array1))
console.log('count', count1)

function quickSortRecursion(array) {
    if (array.length < 2) {
        return array
    } else {
        let pivot = array[Math.floor(Math.random() * array.length)]
        const less = array.filter(value => value < pivot);
        const greater = array.filter(value => value > pivot);
        return [...quickSortRecursion(less), pivot, ...quickSortRecursion(greater)]
    }
}

console.log(quickSortRecursion(array1), 'reC')
