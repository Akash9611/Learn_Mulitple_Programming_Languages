// Java program to check if a string is a palindrome
// Palindrome: A string that reads the same backward as forward

public class stringPalindrome {
    // Method 1 - to check palindrome
    public static boolean isPalindrome(String str) {
        int left = 0;
        int right = str.length() - 1;
        while (left < right) {
            if (str.charAt(left) != str.charAt(right)) {
                return false;
            }
            left++;
            right--;
        }

        // using for loop
        // for (int i = 0, j = str.length() - 1; i < j; i++, j--) {
        // if (str.charAt(i) != str.charAt(j)) {
        // return false;
        // }
        // }
        return true;
    }

    // Method 2- to reverse a string and check palindrome
    public static void reverseString() {
        System.out.println("--- Starting reverseString method ---");
        String str = "madam";
        String reversed = ""; // this string will hold the reversed version of str, initially empty so can be manipulated

        for (int i = str.length() - 1; i >= 0; i--) {
            reversed += str.charAt(i);
        }
        System.out.println("Reversed String: " + reversed);

        if (str.equals(reversed)) {
            System.out.println(str + " is a palindrome.----");
        } else {
            System.out.println(str + " is not a palindrome.----");
        }
    }

    public static void main(String[] args) {
        String testStr = "radar";
        reverseString();
        if (isPalindrome(testStr)) {
            System.out.println(testStr + " is a palindrome.");
        } else {
            System.out.println(testStr + " is not a palindrome.");
        }

    }
}
