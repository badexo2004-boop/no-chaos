word = input("Enter word: ")
fine = True


word_length = 0
for ch in word:
    word_length = word_length + 1


for pos in range(word_length // 2):
    if word[pos] != word[word_length - 1 - pos]:
        fine = False

if fine:
    print(f"{word} na palindrome")
else:
    print(f"{word} no be palindrome")
