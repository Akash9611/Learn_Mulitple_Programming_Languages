// HashSet - A collection that contains no duplicate elements
// No order is maintained
// Allows null elements
// Backed by a hash table (actually a HashMap instance) / Backed by a hash map

import java.util.HashSet;

class hashSetDemo {
    public static void main(String[] args) {
        // Creating a HashSet
        HashSet<String> set = new HashSet<>();

        // Adding elements to the HashSet
        set.add("Apple");
        set.add("Banana");
        set.add("Orange");
        set.add(null); // Adding a null element
        set.add(""); // Adding an empty string
        set.add("Apple"); // Duplicate element, will not be added

        // Displaying the HashSet
        System.out.println("HashSet: " + set);

        // Checking if an element exists
        if (set.contains("Banana")) {
            System.out.println("Banana is present in the HashSet.");
        }

        // Removing an element
        set.remove("Orange");
        System.out.println("After removing Orange: " + set);

        // Iterating through the HashSet
        System.out.println("Iterating through the HashSet:");
        for (String fruit : set) {
            System.out.println(fruit);
        }
    }
}