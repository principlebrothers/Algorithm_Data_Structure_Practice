// s: integer, starting point of Sam's house location.
// t: integer, ending location of Sam's house location.
// a: integer, location of the Apple tree.
// b: integer, location of the Orange tree.
// apples: integer array, distances at which each apple falls from the tree.
// oranges: integer array, distances at which each orange falls from the tree.

const countApplesAndOranges = (s, t, a, b, apples, oranges) => {
  let apples_on_sam_house = 0;
  let oranges_on_sam_house = 0;
  apples.forEach(apple => {
    let apple_fall = (a + (apple));
    if (apple_fall >= s && apple_fall <= t) apples_on_sam_house+=1;
  });
  oranges.forEach(orange => {
    let orange_fall = (b + (orange));
    if (orange_fall >= s && orange_fall <= t) oranges_on_sam_house += 1;
  })
  console.log(apples_on_sam_house)
  console.log(oranges_on_sam_house)
};

let s = 7; //start point of sam's house
let t = 11; // end point of sam's house
let a = 5; //apples position
let b = 15; // oranges position
let m = 3; // apples
let n = 2; // oranges
let apples = [-2, 2, 1];
let oranges = [5, -6];

countApplesAndOranges(s, t, a, b, apples, oranges);