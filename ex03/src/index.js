class Person {
    static display() {
        let message = "Static metod is invoked from Person class";
        return message;
    }
    show() {
        console.log(Person.display());
    }
}

let massage = new Person();
massage.show();
module.exports = Person;