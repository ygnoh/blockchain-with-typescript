interface Person {
    name: string;
    age: number;
}

const sayHi = (person: Person): string => {
    return `Hello ${person.name}(${person.age})`
}

const person: Person = {
    name: "noh",
    age: 1
};

console.log(sayHi(person));