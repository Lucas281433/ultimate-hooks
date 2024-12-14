"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toNewPerson = exports.toNewNote = void 0;
const isString = (value) => {
    return typeof value === "string" || value instanceof String;
};
const parseContent = (content) => {
    if (!content || !isString(content)) {
        throw new Error("Incorrect or missing content");
    }
    return content;
};
const parseName = (name) => {
    if (!name || !isString(name)) {
        throw new Error("Incorrect or missing name");
    }
    return name;
};
const parseNumber = (number) => {
    if (!number || !isString(number)) {
        throw new Error("incorrect or missing number");
    }
    return number;
};
const toNewNote = (object) => {
    if (!object || typeof object !== "object") {
        throw new Error("Invalid note");
    }
    if ("content" in object) {
        const newNote = {
            content: parseContent(object.content)
        };
        return newNote;
    }
    throw new Error("Invalid note");
};
exports.toNewNote = toNewNote;
const toNewPerson = (object) => {
    if (!object || typeof object !== "object") {
        throw new Error("Invalid person");
    }
    if ("name" in object && "number" in object) {
        const newPerson = {
            name: parseName(object.name),
            number: parseNumber(object.number)
        };
        return newPerson;
    }
    throw new Error("Invalid person");
};
exports.toNewPerson = toNewPerson;
