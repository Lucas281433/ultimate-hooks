import { NewNote, NewPerson } from "../types";

const isString = (value: unknown): value is string => {
    return typeof value === "string" || value instanceof String;
};

const parseContent = (content: unknown): string => {
    if (!content || !isString(content)) {
        throw new Error("Incorrect or missing content");
    }
    return content;
};

const parseName = (name: unknown): string => {
    if (!name || !isString(name)) {
        throw new Error("Incorrect or missing name");
    }
    return name;
};

const parseNumber = (number: unknown): string => {
    if (!number || !isString(number)) {
        throw new Error("incorrect or missing number");
    }
    return number;
};

export const toNewNote = (object: unknown): NewNote => {
    if (!object || typeof object !== "object") {
        throw new Error("Invalid note");
    }

    if ("content" in object) {
        const newNote: NewNote = {
            content: parseContent(object.content)
        };
        return newNote;
    }
    throw new Error("Invalid note");
};

export const toNewPerson = (object: unknown): NewPerson => {
    if (!object || typeof object !== "object") {
        throw new Error("Invalid person");
    }

    if ("name" in object && "number" in object) {
        const newPerson: NewPerson = {
            name: parseName(object.name),
            number: parseNumber(object.number)
        };
        return newPerson;
    }
    throw new Error("Invalid person");
};