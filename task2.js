const A = [1, -1, 0, -105, 1];
const D = ['2020-12-31', '2020-04-04', '2020-04-04', '2020-04-14', '2020-07-12'];

solution(A, D);

function solution(A, D) {
    let balance = 0;
    const transactions = [];
    A.forEach((tAmmount, i) => {
      transactions.push({ ammount: tAmmount, date: new Date(D[i]) });
    });
    const monthsPaymentsSum = new Array(12).fill(0);
    const monthsPaymentsAmmount = new Array(12).fill(0);
    transactions.forEach((transaction) => {
      balance += transaction.ammount;
      if (transaction.ammount < 0) {
        monthsPaymentsSum[transaction.date.getMonth()] += transaction.ammount;
        monthsPaymentsAmmount[transaction.date.getMonth()]++;
      }
    });
    //checkFee
    let fee = 60;
    for (let i=0;i<12;i++) {
      if (monthsPaymentsSum[i] < -100 && monthsPaymentsAmmount )
        if (monthsPaymentsAmmount[i] >= 3) {
          fee -= 5;
        }
    };
    balance -= fee;
    return balance;
  }
  
