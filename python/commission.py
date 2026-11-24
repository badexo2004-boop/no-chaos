sales = float(input("How much did you sell this year? "))
commission = 0

# first 5000 gets nothing
if sales > 5000 and sales <= 10000:
    commission = (sales - 5000) * 0.06
elif sales > 10000 and sales <= 15000:
    commission = 5000 * 0.06 + (sales - 10000) * 0.08
elif sales > 15000:
    commission = 5000 * 0.06 + 5000 * 0.08 + (sales - 15000) * 0.10

print(f"Your pay is: {5000 + commission}")

