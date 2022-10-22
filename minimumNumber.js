const minimumNumber = (n, password) => {
  const numbers = "0123456789";
  const lower_case = "abcdefghijklmnopqrstuvwxyz";
  const upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const special_characters = "!@#$%^&*()-+";

  let count = 0;
  if (!numbers.split("").some((v) => password.includes(v))) count++;
  if (!lower_case.split("").some((v) => password.includes(v))) count++;
  if (!upper_case.split("").some((v) => password.includes(v))) count++;
  if (!special_characters.split("").some((v) => password.includes(v))) count++;

  return Math.max(count, 6 - n);
}

let n = 3;
let password = "Ab1";
console.log(minimumNumber(n, password));
