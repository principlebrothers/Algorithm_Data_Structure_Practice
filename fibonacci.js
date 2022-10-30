const fibonacci = (num) => {
  let output = [0, 1]
  if (num < 0) return "Not a fibonacci num";
  if (num < 1) return output[0];
  if (num < 2) return output[1];
  if (num < 3) return output;
  if (num >= 3) {
    while (output.length < num) {
      output.push(output[output.length - 2] + output[output.length - 1])
    }
  }
  return output;
}


console.log(fibonacci(7))