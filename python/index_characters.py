text = input("Enter word: ")
pos = 0

# pos = 0, 1, 2, 3...
for ch in text:
    if pos % 2 == 0:
        print(ch)
    pos = pos + 1
