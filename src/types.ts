export interface Note {
    id: number,
    content: string
};

export type NewNote = Omit<Note, "id">;

export interface Person {
    id: number,
    name: string,
    number: string
};

export type NewPerson = Omit<Person, "id">;