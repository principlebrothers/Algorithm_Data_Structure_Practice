const libraryFine = (d1, m1, y1, d2, m2, y2) => {
  // Write your code here
  // first values are return dates
  // second values are due dates

  let fine = 0;
  if (y1 < y2 || (y1 == y2 && m1 < m2) || (y1 == y2 && m1 == m2 && d1 <= d2)) return fine;
  if (d2 < d1 && m2 == m1 && y2 == y1) return 15 * (d1 - d2)
  if (y1 > y2) return 10000;
  if (m2 < m1 && y2 == y1) return 500 * (m1 - m2);

};

let d1 = 9;
let m1 = 5;
let y1 = 2015;
let d2 = 6;
let m2 = 5;
let y2 = 2015;

console.log(libraryFine(d1, m1, y1, d2, m2, y2));