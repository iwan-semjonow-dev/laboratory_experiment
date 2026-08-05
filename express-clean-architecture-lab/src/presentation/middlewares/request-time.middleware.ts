import type { NextFunction, Request, Response } from 'express';

declare global {
    namespace Express {
        interface Request {
            requestTime?: string;
        }
    }
}

export function requestTimeMiddleware(
    req: Request,
    _res: Response,
    next: NextFunction,
): void {
    req.requestTime = new Date().toISOString();
    next();
}
