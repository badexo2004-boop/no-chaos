let total = 0;
let count = 0;

while (true) {
  let num = Number(prompt("Enter number (-1 to stop): "));

  if (num == -1) {
    break;
  }

  total = total + num;
  count = count + 1;

  console.log("Running average so far: " + total / count);
}
