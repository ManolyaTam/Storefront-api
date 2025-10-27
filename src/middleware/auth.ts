import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET || 'it-is-a-secret';

export interface AuthRequest extends Request {
  user?: any;
}

export const verifyToken = (req: AuthRequest, res: Response, next: NextFunction) => {
  console.log("psst, here is a valid token");
  console.log(jwt.sign({ id: 1 }, SECRET_KEY, { expiresIn: '1h' }));
  const authHeader = req.headers['authorization'];

  if (!authHeader) return res.status(401).send('No token provided');

  const token = authHeader.split(' ')[1];

  if (!token) return res.status(401).send('Token missing');

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded;
    next();
  } catch (err) {
    console.error(err);
    res.status(403).send('Invalid token');
  }
};
