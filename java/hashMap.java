// HashMap - A collection that stores key-value pairs, allowing for fast retrieval based on keys.
// Keys are unique, but values can be duplicate
// Only allow one null key and multiple null values
// Unordered collection
// Not Thread safe / Not synchronized
// Backed by an Hash table

import java.util.HashMap;
import java.util.Map;

class hashMapDemo{
    public static void main(String[] args) {
        // Creating a HashMap
        HashMap<Integer, String> map = new HashMap<>();

        // Adding key-value pairs to the HashMap
        map.put(1, "Apple");
        map.put(2, "Banana");
        map.put(3, "Orange");
        map.put(4, null); // Adding a null value
        map.put(null, "Grapes"); // Adding a null key
        map.put(null, "Black Berry"); // Adding a null key again, will update the value for null key

        // Displaying the HashMap
        System.out.println("HashMap: " + map);

        // Retrieving a value based on its key
        String value = map.get(2);
        System.out.println("Value for key 2: " + value);

        // Checking if a key exists
        if (map.containsKey(3)) {
            System.out.println("Key 3 is present in the HashMap.");
        }

        // Removing a key-value pair
        map.remove(1);
        System.out.println("After removing key 1: " + map);

        // Iterating through the HashMap
        System.out.println("Iterating through the HashMap:");
        for (Map.Entry<Integer, String> entry : map.entrySet()) {
            System.out.println("Key: " + entry.getKey() + ", Value: " + entry.getValue());
        }
    }
}