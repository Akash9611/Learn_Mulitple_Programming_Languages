// Reverse a given string without using built-in/reverse functions in Java

public class reverseString {
    public static void main(String[] args){
                String name = "Akash";

        //! Just example of traditional for loop with string
        // for (int i = 0; i < name.length(); i++) {
        // System.out.println(name.charAt(i)); // A k a s h
        // }

        //Print string in reverse without using reverse function
        for (int i = name.length() - 1; i >= 0; i--) { // for loop starts from last index to 0
            System.out.println(name.charAt(i)); // h s a k A
        }

        // Print reversed string in a single line
        String reversed = "";
        for (int i = name.length() - 1; i >= 0; i--) {
            reversed += name.charAt(i);
        }
        System.out.println("Reversed String: " + reversed);

        // Another approach using char array
        char[] charArray = name.toCharArray();
        String reversed2 = "";
        for (int i = charArray.length - 1; i >= 0; i--) {
            reversed2 += charArray[i];
        }
        System.out.println("Reversed String (char array): " + reversed2);

        // without using charAt()
        String reversed3 = "";
        for (int i = name.length() - 1; i >= 0; i--) {
            reversed3 += name.substring(i, i + 1);
        }
        System.out.println("Reversed String (substring): " + reversed3);
    }
}
