"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = __importDefault(require("../data/data"));
/**
 * Retrieves all notes from the data storage.
 * @returns {Note[]} An array of all notes from the data storage.
 */
const getAllNotes = () => {
    return data_1.default.notes;
};
/**
 * Creates a new note and adds it to the data storage.
 * @param {NewNote} newNote - The new note data to create.
 * @returns {Note} The newly created note with an assigned id.
 */
const createNote = (newNote) => {
    const note = {
        id: data_1.default.notes.length + 1,
        content: newNote.content
    };
    data_1.default.notes.push(note);
    return note;
};
exports.default = { getAllNotes, createNote };
