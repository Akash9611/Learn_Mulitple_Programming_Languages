// Method Overloading - A class can have multiple methods with the same name but different parameters.

class OverloadingDemo {
    // method with two int parameters
    public int add(int a, int b) {
        return a + b;
    }

    // overloaded method with three int parameters
    public int add(int a, int b, int c) {
        return a + b + c;
    }

    // overloaded method with two double parameters
    public double add(double a, double b) {
        return a + b;
    }

    public static void main(String[] args) {
        OverloadingDemo obj = new OverloadingDemo();

        // calling method with two int parameters
        System.out.println("Sum of 2 and 3: " + obj.add(2, 3));

        // calling overloaded method with three int parameters
        System.out.println("Sum of 2, 3 and 4: " + obj.add(2, 3, 4));

        // calling overloaded method with two double parameters
        System.out.println("Sum of 2.5 and 3.5: " + obj.add(2.5, 3.5));
    }
}