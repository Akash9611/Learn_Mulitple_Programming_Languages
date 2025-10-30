// Abstraction - Hiding internal implementation and showing only essential details/set of services.
// We can achieve abstraction using i] abstract classes and ii] interfaces.

abstract class Animal {
    // abstract method (does not have a body)
    public abstract void sound();
}

class Dog extends Animal {
    // providing implementation of abstract method
    @Override
    public void sound() {
        System.out.println("Dog barks");
    }
}

class Cat extends Animal {
    // providing implementation of abstract method
    @Override
    public void sound() {
        System.out.println("Cat meows");
    }
}

class AbstractionDemo {
    public static void main(String[] args) {
        Animal myDog = new Dog();
        Animal myCat = new Cat();
        myDog.sound();
        myCat.sound();
    }
}