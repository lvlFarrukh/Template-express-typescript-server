import { Router, Request, Response } from 'express';
import { createAuth } from '../../helpers/AuthJWT';
import Users, {UserObj} from '../Modals/UserModal';

export const Signup = async (req: Request, res: Response) => {
    // const isUserExist = await UserObj.getOne({ 'email': req.body.email})
    // if (isUserExist && isUserExist?.status === "success") {
    //     let user = UserObj.insert(req.body)
    //     res.json(user).status(200);
    // }
    // else {
    //     res.json({status: "error", message: "Invalid email or password."}).status(404);
    // }   

    const isUserExist = await UserObj.insert(req.body)
    res.json(isUserExist)
}