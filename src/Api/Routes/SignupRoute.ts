import { Router, Request, Response } from 'express';
import { auth } from '../../helpers/AuthJWT';

export const SignupRouter: Router = Router();

// Add routes
SignupRouter.post(`${process.env.BASE_URL}/signup`, auth, (req: Request, res: Response) => {
    res.send('Signup Api');
});

export default SignupRouter;
