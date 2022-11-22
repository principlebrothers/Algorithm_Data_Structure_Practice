const cartesianProduct = (arrA, arrB) => {
  let outputArr = []
  for (let i = 0; i < arrA.length; i++) {
    for (let j = 0; j < arrB.length; j++) {
      outputArr.push([arrA[i], arrB[j]])
    }
  }
  return outputArr;
}

let arrA = [1, 2];
let arrB = [3, 4, 5]

console.log(cartesianProduct(arrA, arrB));

// Time complexity (i.e. BigO)= O(mxn)