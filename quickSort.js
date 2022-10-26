const quickSort = (arr) => {
  // Base case
  if (arr.length <= 1) {
    return arr;
  }
  // Recursive case
  // Choose a pivot
  let pivot = arr[0];
  // Partition the array
  let left = [];
  let right = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  // Recursively call quickSort on the left and right partitions
  return [...quickSort(left), pivot, ...quickSort(right)];
};

let arr = [5, 3, 8, 2, 1, 4];
console.log(quickSort(arr));