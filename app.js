const year = 40;
let YearlyInvest = 12000;
let startAmount = 1000;
let profit = 1.75;
let totalMoney;
let x;

for (let i = 1; i <= year; i++) {
  totalMoney = startAmount * profit + YearlyInvest;
  x = parseInt(totalMoney) + "";
  startAmount = totalMoney;
  console.log(i, totalMoney, x.length);
}
