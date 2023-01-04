import jwt, { Secret, JwtPayload } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';


export interface CustomRequest extends Request {
  token: string | JwtPayload;
}

export const createAuth = (userName: string) => {
  const token = jwt.sign({name: userName}, process.env.SECRET_KEY, {
    expiresIn: '5min',
  });

  return { user: { userName }, token };
}

export const auth = async (req: Request, res: Response, next: NextFunction) => {
 try {
   const token = req.header('Authorization')?.replace('Bearer ', '');

   if (!token) {
     throw new Error();
   }

   const decoded = jwt.verify(token, process.env.SECRET_KEY);
   console.log('token decoded', decoded);
   (req as CustomRequest).token = decoded;

   next();
 } catch (err) {
   res.status(401).send('Authentication Failed');
 }
};
