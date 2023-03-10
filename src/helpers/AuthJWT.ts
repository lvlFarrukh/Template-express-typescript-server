import jwt, { Secret, JwtPayload } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';


export interface CustomRequest extends Request {
  token: string | JwtPayload;
}

export const createAuth = (user: any) => {
  const token = jwt.sign({email: user.email}, process.env.SECRET_KEY, {
    expiresIn: process.env.AUTH_TIME,
  });

  return { session: { 
    userID: user._id,
    name: user.name,
    email: user.email,
   }, token };
}

export const auth = async (req: Request, res: Response, next: NextFunction) => {
 try {
   const token = req.header('Authorization')?.replace('Bearer ', '');

   if (!token) {
     throw new Error();
   }

   const decoded = jwt.verify(token, process.env.SECRET_KEY);
   (req as CustomRequest).token = decoded;

   next();
 } catch (err) {
   res.status(401).send('Authentication Failed');
 }
};
