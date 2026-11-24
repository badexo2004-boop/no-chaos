let sales = Number(prompt("How much did you sell this year? "));
let commission = 0;

// first 5000 na free, no commission
if (sales > 5000 && sales <= 10000) {
  commission = (sales - 5000) * 0.06;
} else if (sales > 10000 && sales <= 15000) {
  commission = 5000 * 0.06 + (sales - 10000) * 0.08;
} else if (sales > 15000) {
  commission = 5000 * 0.06 + 5000 * 0.08 + (sales - 15000) * 0.10;
}

console.log("Your pay is: " + (5000 + commission));
