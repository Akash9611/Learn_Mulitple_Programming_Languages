public class patternBasedQuestion {
    public static void main(String[] args) {
    // Example: print numbers 1 to 5, each repeated by its own value       
        for (int i = 1; i <= 5; i++) {
            System.out.println(String.valueOf(i).repeat(i));
        }

    // Example: print a pattern of stars
        int n = 5; // number of lines
        for (int i = 1; i <= n; i++) {
            System.out.println("*".repeat(i));
        }
    }
}
