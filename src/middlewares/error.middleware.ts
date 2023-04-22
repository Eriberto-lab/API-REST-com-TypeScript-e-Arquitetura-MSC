import { ErrorRequestHandler } from "express";

const errorMiddleware: ErrorRequestHandler = (err: unknown, req, res, next) => {
    if(err instanceof Error && err.message === 'unauthorized'){
        res.status(401).json({message: 'Login não autorizado'});
    }

    next();

}