import data from "../data/data";
import { NewNote, Note } from "../types";

/**
 * Retrieves all notes from the data storage.
 * @returns {Note[]} An array of all notes from the data storage.
 */
const getAllNotes = (): Note[] => {
    return data.notes;
};

/**
 * Creates a new note and adds it to the data storage.
 * @param {NewNote} newNote - The new note data to create.
 * @returns {Note} The newly created note with an assigned id.
 */
const createNote = (newNote: NewNote): Note => {
    const note: Note = {
        id: data.notes.length +1,
        content: newNote.content
    };
    
    data.notes.push(note);
    return note;
};

export default { getAllNotes, createNote };