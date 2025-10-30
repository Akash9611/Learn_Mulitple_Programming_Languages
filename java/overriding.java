// Method Overriding - Same method name and Same parameters, but in different classes (parent and child class).

class Animal {
    // method to be overridden
    public void sound() {
        System.out.println("Animal makes a sound");
    }
}
class Dog extends Animal {
    // overriding the sound method
    @Override
    public void sound() {
        System.out.println("Dog barks");
    }
}  
class Cat extends Animal {
    // overriding the sound method
    @Override
    public void sound() {
        System.out.println("Cat meows");
    }
}
class OverridingDemo {
    public static void main(String[] args) {
        Animal myAnimal = new Animal(); // Animal object
        Animal myDog = new Dog();       // Dog object
        Animal myCat = new Cat();       // Cat object

        myAnimal.sound(); // calls the method in Animal class
        myDog.sound();    // calls the overridden method in Dog class
        myCat.sound();    // calls the overridden method in Cat class
    }
}
