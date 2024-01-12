function sortedFrequency(arr, val) {
    let first;
    let last;

    first = findFirst(arr, val, 0, arr.length - 1);
    console.log("first: "+first);
    if(first === -1) return first;
    last = findLast(arr, val, 0, arr.length - 1);
    console.log("sortedFrequency first:" + first);
    console.log("sortedFrequency last:" + last);
    console.log("final:" + (last - first + 1));
    return last - first + 1;
}

function findFirst(arr, val, low, high) {
    console.log("findFirst starting arguments:" + arr, val, low, high)
    if (high >= low){
        
        let mid = Math.floor((low + high) / 2);
        console.log("first mid:" + mid)
        if ((mid === 0 || val > arr[mid - 1]) && arr[mid] === val) {
            console.log("condition 1 mid:" + mid)
            return mid;
        } else if (val > arr[mid]){
            return findFirst(arr, val, (mid + 1), high);
        } else {
            return findFirst(arr, val, low, (mid - 1))
        }
    }
    return -1;
}

function findLast(arr, val, low, high) {
    console.log("findLast starting arguments:" + arr, val, low, high)
    if (high >= low){
        
        let mid = Math.floor((low + high) / 2);
        console.log("last mid:" + mid)
        if ((mid === high || val < arr[mid + 1]) && arr[mid] === val) {
            console.log("condition last 1 mid:" + mid)
            return mid;
        } else if (val < arr[mid]){
            return findLast(arr, val, low, (mid - 1));
        } else {
            return findLast(arr, val, (mid + 1), high)
        }
    }
    return -1;
}

module.exports = sortedFrequency
