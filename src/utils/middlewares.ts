import { Request, Response, NextFunction } from "express";

const unknownEndpoint = (_req: Request, res: Response) => {
    res.status(404).send({ error: "Unknown endpoint"});
};

const requestLogger = (req: Request, _res: Response, next: NextFunction) => {
    console.log("Method: ", req.method);
    console.log("Path: ", req.path);
    console.log("Body: ", req.body);
    console.log("-----");
    next();
};

export default { unknownEndpoint, requestLogger };