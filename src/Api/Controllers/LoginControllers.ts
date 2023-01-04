import { Router, Request, Response } from 'express';
import { LoginFetch } from '../Modals/LoginModal';
import { createAuth } from '../../helpers/AuthJWT';

export const Login = (req: Request, res: Response) => {
    const session = createAuth("farrukh")
    res.json(session);
}