"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = __importDefault(require("./App"));
const config_1 = __importDefault(require("./utils/config"));
const PORT = config_1.default.PORT;
App_1.default.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
});
