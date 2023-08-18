// flat
const array = [1, 1, 63, 5 , 4, [1, 3 , 5 ,8 , [4, 8,6, 54]]]
console.log(array.flat(3))

// flatmap
const array2 = [1, 4, 8, 8, 3]
console.log(array2.flatMap(value => [value, value * 2]))