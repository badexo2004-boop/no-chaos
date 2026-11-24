secret = 67
tries = 0
guess = 0

while guess != secret:
    guess = int(input("Guess 1 to 100: "))
    tries = tries + 1

    if guess < secret:
        print("Too low, try again")
    elif guess > secret:
        print("Too high, try again")
    else:
        print(f"You got it! You used {tries} tries")
