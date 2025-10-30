// Abstraction using an interface

interface A {
    void show();
}

class B implements A {
    @Override
    public void show() {
        System.out.println("Hello class B");
    }
}

class InterfaceDemo {
    public static void main(String[] args) {
        A obj = new B();
        obj.show();
    }
}