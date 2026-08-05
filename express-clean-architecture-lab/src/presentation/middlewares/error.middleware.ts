import type { NextFunction, Request, Response } from 'express';
import { AppError } from '../../shared/errors/app-error.js';

export function errorMiddleware(
    error: unknown,
    _req: Request,
    res: Response,
    _next: NextFunction,
): void {
    if (error instanceof AppError) {
        res.status(error.statusCode).json({
            statusCode: error.statusCode,
            message: error.message,
        });
        return;
    }
    console.error(error);
    res.status(500).json({
        statusCode: 500,
        message: 'Внутренняя ошибка сервера',
    });
}
