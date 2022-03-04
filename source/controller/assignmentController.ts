import express from "express";
import UserRepo from "../repo/userRepo";
import AssignmentRepo from "../repo/assignmentsRepo";
import {GenericException} from "../exception/GenericException";

export const getAssignments = (req :express.Request, res:express.Response) => {
    UserRepo.findOne({username:req.get("username")})
        .then(async u => u
            ? res.send(await AssignmentRepo.findOne({_id: u.assignedTests}))
            :sendException(res,"User don`t have assignments"))
}
const sendException= (res:express.Response, text:string) =>{
    res.status(404);
    res.send(new GenericException(text));
}