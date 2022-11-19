const binarySearch = (arr, target) => {
  return search(arr, target, 0, arr.length-1);
}

const search = (arr, target, startIdx, endIdx) => {
  if (startIdx > endIdx) return -1;

  let midIdx = Math.floor((startIdx + endIdx) / 2);
  if (target === arr[midIdx]) {
    return midIdx;
  }
  if (target < arr[midIdx]) {
    endIdx = midIdx - 1;
    return search(arr, target, startIdx, endIdx)
  }
  if (target > arr[midIdx]) {
    startIdx = midIdx + 1;
    return search(arr, target, startIdx, endIdx)
  }

  return -1;
}

let arr = [1, 2, 4, 6, 7, 10];
let target = 2;

console.log(binarySearch(arr, target));