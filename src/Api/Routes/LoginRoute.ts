import { Router, Request,  } from 'express';
import { auth } from '../../helpers/AuthJWT';
import { Login } from '../Controllers/LoginControllers';
import dotenv from "dotenv";

dotenv.config();

export const LoginRouter: Router = Router();

// Add routes
LoginRouter.post(`${process.env.BASE_URL}/login`, (req, res) => Login(req, res));

export default LoginRouter;
