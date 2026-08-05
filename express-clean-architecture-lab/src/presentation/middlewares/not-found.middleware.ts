import type { NextFunction, Request, Response } from 'express';
import { AppError } from '../../shared/errors/app-error.js';

export function notFoundMiddleware(
    req: Request,
    _res: Response,
    next: NextFunction,
): void {
    next(new AppError(`Маршрут ${req.method} ${req.originalUrl} не найден`, 404));
}
