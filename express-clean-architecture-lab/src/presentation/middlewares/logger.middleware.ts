import type { NextFunction, Request, Response } from 'express';

export function loggerMiddleware(
    req: Request,
    res: Response,
    next: NextFunction,
): void {
    const startedAt = Date.now();
    console.log(`→ ${req.method} ${req.originalUrl}`);
    res.on('finish', () => {
        const duration = Date.now() - startedAt;
        console.log(`← ${res.statusCode} ${duration} ms`);
    });
    next();
}
