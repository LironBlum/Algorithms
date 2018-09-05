const qsort = require('./quickSort') 

const toSort = [1,3,58,8,9,11,2,2,12,20,21,4];

let quickSorted = qsort.sort(toSort)

console.log(`Using quicksort to sort [${toSort}], 
Quicksort is an efficient sorting algorithm, developed by Tony Hoare.
The algorithm takes O(n log n) comparisons to sort n items, worst case makes O(n2) comparisons. 
(Source: Wikipedia)
array after sorting: [${quickSorted}]`)
