function alternate(s) {
  let count = 0;
  let arr = s.split('');
  let unique = [...new Set(arr)];
  let pairs = [];

  for (let i = 0; i < unique.length; i++) {
    for (let j = i + 1; j < unique.length; j++) {
      pairs.push([unique[i], unique[j]]);
    }
  }
  console.log(pairs);

  for (let i = 0; i < pairs.length; i++) {
    // filter out the pairs
    let temp = arr.filter((el) => el === pairs[i][0] || el === pairs[i][1]);
    console.log(temp);
    // check if the filtered array is alternating
    let alternating = true;
    for (let j = 0; j < temp.length - 1; j++) {
      if (temp[j] === temp[j + 1]) {
        alternating = false;
        break;
      }
    }
    if (alternating) {
      // if it is, check if the length is greater than the current count
      if (temp.length > count) {
        count = temp.length;
      }
    }
  }
  return count;
}


let s = 'beabeefeab';
console.log(alternate(s)); // 5


