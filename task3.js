solution(2, "1A 2F 1J");

function solution(N, S) {
  let possibleSeatsNum = 0;
  const lines = [];
  for (let i = 0; i < N; i++) {
    lines.push(new Array(10).fill(0));
  }
  console.table(lines);
  const takenSeats = S.split(" ");
  takenSeats.forEach((chair) => {
    let chairNum = chair.charCodeAt(1) - 65;
    chairNum = chairNum > 8 ? chairNum - 1 : chairNum;
    lines[chair[0] - 1][chairNum] = 1;
  });
  console.table(lines);
  lines.forEach((line) => {
    let possible = true;
    for (i = 1; i < 5; i++) {
      if (line[i] === 1) possible = false;
    }
    if (possible) possibleSeatsNum++;

     possible = true;
    for (i = 3; i < 7; i++) {
      if (line[i] === 1) possible = false;
    }
    if (possible) possibleSeatsNum++;

     possible = true;
    for (i = 5; i < 9; i++) {
      if (line[i] === 1) possible = false;
    }
    if (possible) possibleSeatsNum++;

  });
  // write your code in JavaScript (Node.js 8.9.4)
  return possibleSeatsNum;
}
