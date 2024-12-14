"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const notes_1 = __importDefault(require("./controllers/notes"));
const persons_1 = __importDefault(require("./controllers/persons"));
const cors_1 = __importDefault(require("cors"));
const middlewares_1 = __importDefault(require("./utils/middlewares"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.static("dist"));
app.use(middlewares_1.default.requestLogger);
app.use(express_1.default.json());
app.use("/api/notes", notes_1.default);
app.use("/api/persons", persons_1.default);
app.use(middlewares_1.default.unknownEndpoint);
exports.default = app;
