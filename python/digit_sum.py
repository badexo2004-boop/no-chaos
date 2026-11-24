
for hundreds in range(1, 10):
    for tens in range(10):
        for ones in range(10):
            number = hundreds * 100 + tens * 10 + ones
            total = hundreds * hundreds + tens * tens + ones * ones

            if total == number:
                print(number)
