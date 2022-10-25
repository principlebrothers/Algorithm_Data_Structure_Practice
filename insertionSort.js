const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i];
    let sorted_idx = i - 1;
    while (sorted_idx >= 0 && arr[sorted_idx] > numberToInsert) {
      arr[sorted_idx + 1] = arr[sorted_idx];
      sorted_idx--;
    }
    arr[sorted_idx + 1] = numberToInsert;
  }
  return arr;
}

let arr = [5, 3, 8, 2, 1, 4];
console.log(insertionSort(arr));
