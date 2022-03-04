import express from "express";
import UserRepo, {UserDocument} from "../repo/userRepo";
import {GenericException} from "../exception/GenericException";
import _ from "lodash";

export const login = async (req: express.Request<{ username: string, password: string }>, res: express.Response) => {
    const {username, password} = req.body;
    const user = await UserRepo.findOne({username: username, password: password});
    user ? res.send(_.omit(user,['password'])) : res.sendStatus(403);
}
export const register = async (req: express.Request, res: express.Response) => {
    const creds: UserDocument = req.body;
    if (await UserRepo.findOne({username: creds?.username}) === null) {
        creds.role = "student";
        let userDocument = await UserRepo.create(creds);
        res.send(_.omit(userDocument,['password']));
    } else {
        res.send(new GenericException("User is already created"))
    }
}
