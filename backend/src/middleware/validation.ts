import { Request, Response, NextFunction } from 'express';
import { body, validationResult } from 'express-validator';

export const validateContactForm = [
    body('name').trim().isLength({ min: 2, max: 50 }).escape(),
    body('email').isEmail().normalizeEmail(),
    body('boat-type').trim().isLength({ max: 100 }).escape(),
    body('message').trim().isLength({ min: 10, max: 1000 }).escape(),

    (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];