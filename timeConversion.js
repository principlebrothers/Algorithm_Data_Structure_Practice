function timeConversion(s) {
  // Write your code here
  let output;
  let hr = 0;
  let splitted = s.split('');
  let rest = splitted.slice(2, 8).join('');

  if (s === '12:00:00PM') return '12:00:00';
  if (s === '12:00:00AM') return '00:00:00';
  if (s.includes('AM')) {
    if (splitted.slice(0, 2).join('') === '12') {
      output = `00${rest}`;
    } else {
      output = splitted.slice(0, 8).join('');
    }
  }
  else if (s.includes('PM')) {
    hr = parseInt(splitted.slice(0, 3).join(''))
    if (hr == 12) {
      output = `${hr}${rest}`
    }
    else { output = `${hr + 12}${rest}` }

  }
  return output;
}

// ALTERNATIVE SOLUTION
// function timeConversion(s) {
//   let time = s.slice(0, 8).split(':');
//   let period = s.slice(8);
//   if (period === 'PM' && time[0] !== '12') {
//     time[0] = (parseInt(time[0]) + 12).toString();
//   }
//   if (period === 'AM' && time[0] === '12') {
//     time[0] = '00';
//   }
//   return time.join(':');
// }



console.log(timeConversion('07:05:45PM'));
// sample output 19:05:45