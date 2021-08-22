let S = "id,name,age,act.,room,dep.\n1,Jack,68,T,13,8\n17,Betty,28,F,15,7";
let C = "age";
solution(S, C);

function solution(S, C) {
  let rows = S.split("\n");
  let keys = rows[0].split(",");
  rows.shift();
  table = [];
  rows.forEach((row) => {
    let rowCells = row.split(",");
    let rowObject = {};
    rowCells.forEach((cell, i) => {
      rowObject[keys[i]] = cell;
    });
    table.push(rowObject);
  });
  let columnValues = [];
  table.forEach((row) => columnValues.push(parseInt(row[C])));
  return Math.max(...columnValues);
}
