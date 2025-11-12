// getter and setter example in Java
// getter and setter methods are used to access and update the private variables of a class.

public class Person {
    // Private instance variables to encapsulate data
    private String name;
    private int age;

    // Constructor (optional, but good practice)
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    // Getter method for 'name'
    public String getName() {
        return name;
    }

    // Setter method for 'name'
    public void setName(String name) {
        this.name = name;
    }

    // Getter method for 'age'
    public int getAge() {
        return age;
    }

    // Setter method for 'age' with validation
    public void setAge(int age) {
        if (age > 0) { // Example of validation
            this.age = age;
        } else {
            System.out.println("Age cannot be negative or zero.");
        }
    }

    public static void main(String[] args) {
        // Create a Person object
        Person person1 = new Person("Alice", 30);

        // Access data using getter methods
        System.out.println("Initial Name: " + person1.getName());
        System.out.println("Initial Age: " + person1.getAge());

        // Modify data using setter methods
        person1.setName("Bob");
        person1.setAge(25);

        // Access modified data
        System.out.println("New Name: " + person1.getName());
        System.out.println("New Age: " + person1.getAge());

        // Attempt to set an invalid age
        person1.setAge(-5); 
        System.out.println("Age after invalid attempt: " + person1.getAge()); // Age remains 25
    }
}