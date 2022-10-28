const mergeSort = (arr) => {
  if (arr.length < 2) return arr;

  let midpoint = Math.floor(arr.length/2)
  let leftArr = arr.slice(0, midpoint)
  let rightArr = arr.slice(midpoint)

  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

const merge = (leftArr, rightArr) => {
  let sortedArr = [];

  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr.shift())
    } else {
      sortedArr.push(rightArr.shift())
    }
  }

  return [...sortedArr, ...leftArr, ...rightArr]
}

let arr = [5, 3, 8, 2, 1, 4];
console.log(mergeSort(arr));