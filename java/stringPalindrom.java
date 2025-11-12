// Java program to check if a string is a palindrome
// Palindrome: A string that reads the same backward as forward

public class stringPalindrom {
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
        //     if (str.charAt(i) != str.charAt(j)) {
        //         return false;
        //     }
        // }
        return true;
    }

    public static void main(String[] args) {
        String testStr = "radar";
        if (isPalindrome(testStr)) {
            System.out.println(testStr + " is a palindrome.");
        } else {
            System.out.println(testStr + " is not a palindrome.");
        }
    }
}
