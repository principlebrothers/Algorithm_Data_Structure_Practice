const factorial = (n, output = 1) => {
  if(n < 0) return "There is no negative factorial"
  if (n === 0 || n === 1) return output;

  output *= n;
  n--
  return factorial(n, output)
}

console.log(factorial(1))