import { Router, Request, Response } from 'express';
import { auth } from '../../helpers/AuthJWT';
import { Signup } from '../Controllers/SignupControllers';

export const SignupRouter: Router = Router();

// Add routes
SignupRouter.post(`${process.env.BASE_URL}/signup`, (req: Request, res: Response) => Signup(req, res));

export default SignupRouter;
