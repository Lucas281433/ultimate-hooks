"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const notesServices_1 = __importDefault(require("../services/notesServices"));
const utils_1 = require("../utils/utils");
/**
 * Router to manage notes operations
 * Provides endpoints for CRUD operations on notes
 * @file controllers/notes.js
 * @description Notes controller.
 */
const notesRouter = express_1.default.Router();
/**
 * Retrieve all notes
 * @route GET /
 * @returns {Array} Array of note objects
 */
notesRouter.get("/", (_req, res) => {
    try {
        const notes = notesServices_1.default.getAllNotes();
        res.status(200).json(notes);
    }
    catch (error) {
        let errorMessage = "Notes not found";
        if (error instanceof Error) {
            errorMessage += "Error: " + error.message;
        }
        res.status(400).send(errorMessage);
    }
});
/**
 * Create a new note
 * @route POST /
 * @param {Object} request.body - Note data to create
 * @returns {Object} Newly created note object
 */
notesRouter.post("/", (req, res) => {
    try {
        const note = (0, utils_1.toNewNote)(req.body);
        const newNote = notesServices_1.default.createNote(note);
        res.status(201).json(newNote);
    }
    catch (error) {
        let errorMessage = "Note not created";
        if (error instanceof Error) {
            errorMessage += "Error: " + error.message;
        }
        res.status(400).send(errorMessage);
    }
});
exports.default = notesRouter;
