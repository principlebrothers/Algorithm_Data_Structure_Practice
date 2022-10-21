const miniMaxSum = (arr) => {
  let total = [];
  let min = 0;
  let max = 0;
  for (let i = 0; i < arr.length; i++){
    let output = arr.reduce((total, curr) => total + curr) - arr[i]
    total.push(output)
    if (output > min && output >= max) max = output;

  }
  console.log(Math.min(...total) + " " + max)
}

// BETTER ALTERNATE SOLUTION
// -------------------------
// const miniMaxSum = (arr) =>{
//   // Find the min and max
//   let min = Math.min(...arr);
//   console.log(min)
//   let max = Math.max(...arr);
//   console.log(max)
//   // Find the sum of the array
//   let sum = arr.reduce((total, curr) => total + curr);
//   console.log(sum)
//   // Print the min and max
//   console.log((sum - max) + " " + (sum - min));
// }

let arr = [1, 2, 3, 4, 5];
miniMaxSum(arr)