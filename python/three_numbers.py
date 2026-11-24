target = int(input("Enter target: "))

for first in range(1, 10):
    for second in range(first + 1, 10):
        for third in range(second + 1, 10):
            if first + second + third == target:
                print(f"{first}, {second}, {third}")
