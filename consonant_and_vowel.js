let text = prompt("Enter something: ");
let vowels = 0;
let consonants = 0;

// pos = position in the text, going one letter at a time
for (let pos = 0; pos < text.length; pos++) {
  let ch = text[pos];

  if (ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u" ||
      ch == "A" || ch == "E" || ch == "I" || ch == "O" || ch == "U") {
    vowels++;
  } else if ((ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z")) {
    consonants++;
  }
}

console.log("Vowels: " + vowels);
console.log("Consonants: " + consonants);
