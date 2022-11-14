const gradingStudents = (grades) => {
  // Write your code here
  let output = [];
  grades.forEach((grade) => {
    if (grade < 38) {
      output.push(grade);
    }
    else if (grade % 5 === 0) {
      output.push(grade);
    }
    else if (grade % 5 !== 0) {
      let mulOfFive = grade;
      while (mulOfFive % 5 === 0) {
        mulOfFive += 1;
      }
      if (mulOfFive - grade < 3) {
        output.push(mulOfFive)
      } else { output.push(grade) }

    }
  });
  return output;
};

// BETTER SOLUTION
// console.log(gradingStudents(grades));
// const gradingStudents = (grades) => {
//   const roundedGrades = grades.map(grade => {
//     if (grade < 38) {
//       return grade;
//     } else {
//       const nextMultipleOfFive = Math.ceil(grade / 5) * 5;
//       if (nextMultipleOfFive - grade < 3) {
//         return nextMultipleOfFive;
//       } else {
//         return grade;
//       }
//     }
//   });
//   return roundedGrades;
// }

let grades = [80, 96, 18, 73, 78, 60, 60, 15, 45, 15, 10, 5, 46, 87, 33, 60, 14, 71, 65, 2, 5, 97, 0];
//answer = [80, 96, 18, 75, 80, 60, 60, 15, 45, 15, 10, 5, 46, 87, 33, 60, 14, 71, 65, 2, 5, 97, 0]
console.log(gradingStudents(grades));
