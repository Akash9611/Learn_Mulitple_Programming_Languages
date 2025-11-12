// For-each loop example in Java
// The for-each loop is used to iterate through elements of arrays or collections in a simplified manner.
// Syntax: for (dataType item : arrayOrCollection) { // use item }

public class forEachLoop {
    public static void main(String[] args) {
        // Example array
        String[] fruits = { "Apple", "Banana", "Cherry", "Date" };

        // Using for-each loop to iterate through the array
        for (String fruit : fruits) {
            System.out.println("Fruit: " + fruit);
        }

        String name = "Akash";
        for (char c : name.toCharArray()) {
            System.out.println(c);
        }

        //! Just example of traditional for loop with string
        // for (int i = 0; i < name.length(); i++) {
        // System.out.println(name.charAt(i));
        // }
    }
}
