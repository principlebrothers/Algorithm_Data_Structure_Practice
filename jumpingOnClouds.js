function jumpingOnClouds(c) {
  // Write your code here
  // loop through the array
  // if the next is 0
  //    jump 2
  // else jump 1
  // return the number of jumps
  let jumps = 0;
  for (let i = 0; i < c.length; i++) {
    if (c[i + 2] === 0) {
      jumps++;
      i++;
    } else if (c[i + 1] === 0) {
      jumps++;
    }
  }
  return jumps;
}


let c = [0, 0, 1, 0, 0, 1, 0];

console.log(jumpingOnClouds(c));