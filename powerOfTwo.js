const isPowerOfTwo = (num) => {
  if (num === 1) {
    return true;
  }
  if (num < 1) {
    return false;
  }
  return isPowerOfTwo(num / 2);
}

console.log(isPowerOfTwo(8))