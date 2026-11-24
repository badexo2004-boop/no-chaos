import java.util.Scanner;

public class Comission {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.print("How much did you sell this year? ");
        double sales = input.nextDouble();
        double commission = 0;

        // first 5000 gets nothing
        if (sales > 5000 && sales <= 10000) {
            commission = (sales - 5000) * 0.06;
        } else if (sales > 10000 && sales <= 15000) {
            commission = 5000 * 0.06 + (sales - 10000) * 0.08;
        } else if (sales > 15000) {
            commission = 5000 * 0.06 + 5000 * 0.08 + (sales - 15000) * 0.10;
        }

        System.out.println("Your pay is: " + (5000 + commission));
    }
}
