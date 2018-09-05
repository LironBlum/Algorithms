
function sort(mess){
    return sortSection(mess, 0,mess.length - 1)
}

module.exports = {
    sort
}

function sortSection(mess, l, r){
    let pivot  

    if(l < r){ //stop when the mess to sort is size 1
        pivot = r 
        let bar = arrangeByPivot(mess, pivot, l, r)
        sortSection(mess, l, bar - 1) //sort left
        sortSection(mess, bar + 1, r) //sort right
    }
    return mess
}

function arrangeByPivot(mess, pivot, l, r){
    const pivotVal = mess[pivot]
    let bar = l  
     for(let i = l ; i < r ; ++i) {
         if(mess[i] < pivotVal) {
             swap(mess, i, bar)
             ++bar
         }
    }
    swap(mess, r, bar)
    return bar
 }
 
 function swap(arr, a, b) {
     let tmp = arr[a]
     arr[a] = arr[b]
     arr[b] = tmp
 }
 


