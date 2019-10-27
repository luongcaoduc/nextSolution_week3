const max = [0, 1, 2, 3, 4, 543543, 43, 432].reduce((accumulator, currentValue, currentIndex) => (accumulator >= currentValue) ? accumulator : currentValue)

const min =  [1, 2, 3, 4, 543543, 43, 432, 0].reduce((accumulator, currentValue, currentIndex) => (accumulator >= currentValue) ? currentValue : accumulator)

console.log("max: " + max)

console.log("min: " + min)
