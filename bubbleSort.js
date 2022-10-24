const bubbleSort = (arr) => {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        let tmp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = tmp;
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
};

let arr = [5, 3, 8, 2, 1, 4];
console.log(bubbleSort(arr));
