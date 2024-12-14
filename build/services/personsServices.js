"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = __importDefault(require("../data/data"));
const getAllPersons = () => {
    return data_1.default.persons;
};
const createPerson = (newPerson) => {
    const person = {
        id: data_1.default.persons.length + 1,
        name: newPerson.name,
        number: newPerson.number
    };
    data_1.default.persons.push(person);
    return person;
};
exports.default = { getAllPersons, createPerson };
