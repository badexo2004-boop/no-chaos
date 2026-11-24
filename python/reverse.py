text = input("Enter word: ")
reversed_word = ""

# count length by hand
text_length = 0
for ch in text:
    text_length = text_length + 1

# start from last letter, go backwards
for pos in range(text_length - 1, -1, -1):
    reversed_word = reversed_word + text[pos]

print(reversed_word)
