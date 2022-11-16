// Using a loop
const binarySeach = (arr, target) => {
  let sortedArr = arr.sort((a, b) => a - b);

  let left = 0;
  let right = sortedArr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (sortedArr[mid] === target) {
      return mid;
    }
    if (sortedArr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};

const arr = [-5, 2, 10, 6, 4];
const target = 10;

console.log(binarySeach(arr, target));
