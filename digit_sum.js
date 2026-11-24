for (let hundreds = 1; hundreds <= 9; hundreds++) {
  for (let tens = 0; tens <= 9; tens++) {
    for (let ones = 0; ones <= 9; ones++) {
      let number = hundreds * 100 + tens * 10 + ones;
      let sumOfSquares = hundreds * hundreds + tens * tens + ones * ones;

      if (sumOfSquares === number) {
        console.log(number);
      }
    }
  }
}
