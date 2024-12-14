import express from "express";
import notesServices from "../services/notesServices";

import { toNewNote } from "../utils/utils";

/**
 * Router to manage notes operations
 * Provides endpoints for CRUD operations on notes
 * @file controllers/notes.js
 * @description Notes controller.
 */

const notesRouter = express.Router();

/**
 * Retrieve all notes
 * @route GET /
 * @returns {Array} Array of note objects
 */
notesRouter.get("/", (_req, res) => {
  try {
    const notes = notesServices.getAllNotes();
    res.status(200).json(notes);
  } catch (error: unknown) {
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
    const note = toNewNote(req.body);
    const newNote = notesServices.createNote(note);
    res.status(201).json(newNote);
  } catch (error: unknown) {
    let errorMessage = "Note not created";
    if (error instanceof Error) {
      errorMessage += "Error: " + error.message;
    }
    res.status(400).send(errorMessage);
  }
});

export default notesRouter;
