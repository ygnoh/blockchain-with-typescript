class Person {
    public name: string;
    public age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const sayHi = (person: Person): string => {
    return `Hello ${person.name}(${person.age})`
}

const person = new Person("noh", 1);

console.log(sayHi(person));