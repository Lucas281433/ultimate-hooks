"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const personsServices_1 = __importDefault(require("../services/personsServices"));
const utils_1 = require("../utils/utils");
/**
 * Router to manage persons operations
 * Provides endpoints for CRUD operations on persons
 * @file controllers/persons.js
 * @description Persons controller.
 */
const personsRouter = express_1.default.Router();
/**
 * Retrieve all persons
 * @route GET /
 * @returns {Array} Array of person objects
 */
personsRouter.get("/", (_req, res) => {
    try {
        const persons = personsServices_1.default.getAllPersons();
        res.status(200).json(persons);
    }
    catch (error) {
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
        const person = (0, utils_1.toNewPerson)(req.body);
        const newPerson = personsServices_1.default.createPerson(person);
        res.status(201).json(newPerson);
    }
    catch (error) {
        let errorMessage = "Person not created";
        if (error instanceof Error) {
            errorMessage += "Error: " + error.message;
        }
        res.status(400).send(errorMessage);
    }
});
exports.default = personsRouter;
