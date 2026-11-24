let target = Number(prompt("Enter target: "));

for (let first = 1; first <= 9; first++) {
  for (let second = first + 1; second <= 9; second++) {
    for (let third = second + 1; third <= 9; third++) {
      if (first + second + third == target) {
        console.log(first + ", " + second + ", " + third);
      }
    }
  }
}
