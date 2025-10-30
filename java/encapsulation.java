// Encapsulation - is one of the four fundamental OOP concepts.
// Encapsulation is the binding of data and methods into a single unit (class).
// It restricts direct access to class fields, we can access them through getters and setters methods.

class Person {
    // private fields
    private String name;
    private int age;

    // constructor
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    // getter for name
    public String getName() {
        return name;
    }

    // setter for name
    public void setName(String name) {
        this.name = name;
    }

    // getter for age
    public int getAge() {
        return age;
    }

    // setter for age
    public void setAge(int age) {
        if (age >= 0) { // simple validation
            this.age = age;
        }
    }
}

class EncapsulationDemo {
    public static void main(String[] args){
        Person p1 = new Person("Alice", 30);
        System.out.println("Name: " + p1.getName());
        System.out.println("Age: " + p1.getAge());
        p1.setAge(35);
        System.out.println("Updated Age: " + p1.getAge());
    }
}