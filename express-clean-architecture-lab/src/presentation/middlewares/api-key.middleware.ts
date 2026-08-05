import type { NextFunction, Request, Response } from 'express';
import { AppError } from '../../shared/errors/app-error.js';

export function apiKeyMiddleware(
    req: Request,
    _res: Response,
    next: NextFunction,
): void {
    const apiKey = req.header('x-api-key');
    if (!apiKey || apiKey !== process.env.API_KEY) {
        next(new AppError('Неверный или отсутствующий API-ключ', 401));
        return;
    }
    next();
}
