import { Router, Request, Response } from 'express';
import { createAuth } from '../../helpers/AuthJWT';
import Users, {UserObj} from '../Modals/UserModal';

export const Login = async (req: Request, res: Response) => {
    const isUserExist = await UserObj.getOne(req.body)
    if (isUserExist && isUserExist?.status === "success") {
        const session = createAuth(isUserExist.data);
        res.json(session).status(200);
    }
    else {
        res.json({status: "error", message: "Invalid email or password."}).status(404);
    }   
}