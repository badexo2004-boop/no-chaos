let word = prompt("Enter word: ");
let fine = true;

// pos = position from the start, checking against the end
for (let pos = 0; pos < word.length / 2; pos++) {
  if (word[pos] != word[word.length - 1 - pos]) {
    fine = false;
  }
}

if (fine) {
  console.log(word + " is a palindrome");
} else {
  console.log(word + " is not a palindrome");
}
