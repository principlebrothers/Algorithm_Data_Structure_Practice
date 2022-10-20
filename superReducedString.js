const superReducedString = (s) => {
  // Write your code here
  // convert to an array using split
  // loop through the input
  // if the first === to the adjacent
  //        remove
  //       break
  //   else push to the output and convert to string
  // return unrepeated string or Empty String
  let input = s.split("");
  for (let j = 0; j < input.length; j++) {
    if (input[j] === input[j + 1]) {
      input.splice(j, 2);
      j = -1;
    }
  }
  if (input.length === 0) {
    return "Empty String";
  } else {
    return input.join("");
  }
};

let s = "abba";
console.log(superReducedString(s));