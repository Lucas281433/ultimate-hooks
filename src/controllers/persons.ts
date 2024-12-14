import express from "express";
import personsServices from "../services/personsServices";

import { toNewPerson } from "../utils/utils";

/**
 * Router to manage persons operations
 * Provides endpoints for CRUD operations on persons
 * @file controllers/persons.js
 * @description Persons controller.
 */

const personsRouter = express.Router();

/**
 * Retrieve all persons
 * @route GET /
 * @returns {Array} Array of person objects
 */
personsRouter.get("/", (_req, res) => {
  try {
    const persons = personsServices.getAllPersons();
    res.status(200).json(persons);
  } catch (error: unknown) {
    let errorMessage = "Persons not found";
    if (error instanceof Error) {
      errorMessage += "Error: " + error.message;
    }
    res.status(400).send(errorMessage);
  }
});

/**
 * Create a new person
 * @route POST /
 * @param {Object} req.body - Person data to create
 * @returns {Object} Newly created person object
 */
personsRouter.post("/", (req, res) => {
  try {
    const person = toNewPerson(req.body);
    const newPerson = personsServices.createPerson(person);
    res.status(201).json(newPerson);
  } catch (error: unknown) {
    let errorMessage = "Person not created";
    if (error instanceof Error) {
      errorMessage += "Error: " + error.message;
    }
    res.status(400).send(errorMessage);
  }
});

export default personsRouter;
