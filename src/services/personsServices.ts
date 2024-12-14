import data from "../data/data";
import { NewPerson, Person } from "../types";

const getAllPersons = (): Person[] => {
    return data.persons;
};

const createPerson = (newPerson: NewPerson): Person => {
    const person: Person = {
        id: data.persons.length + 1,
        name: newPerson.name,
        number: newPerson.number
    };

    data.persons.push(person);
    return person;
};

export default { getAllPersons, createPerson };