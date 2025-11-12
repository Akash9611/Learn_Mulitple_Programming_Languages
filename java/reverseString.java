// Reverse a given string without using built-in/reverse functions in Java

public class reverseString {
    public static void main(String[] args){
                String name = "Akash";

        //! Just example of traditional for loop with string
        // for (int i = 0; i < name.length(); i++) {
        // System.out.println(name.charAt(i)); // A k a s h
        // }

        //Print string in reverse without using reverse function
        for (int i = name.length() - 1; i >= 0; i--) {
            System.out.println(name.charAt(i)); // h s a k A
        }
    }
}
