text = input("Enter sentence: ")
word = ""

# count length by hand
text_length = 0
for ch in text:
    text_length = text_length + 1

# pos = position in the sentence
for pos in range(text_length + 1):
    if pos == text_length or text[pos] == " ":
        if word != "":
            print(word)
            word = ""
    else:
        word = word + text[pos]
