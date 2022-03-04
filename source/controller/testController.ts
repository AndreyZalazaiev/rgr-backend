import express from "express";
import UserRepo from "../repo/userRepo";
import AssignmentRepo from "../repo/assignmentsRepo";
import {GenericException} from "../exception/GenericException";
import TestRepo from "../repo/testRepo";

export const getTests = (async (req: express.Request, res: express.Response) => {
    res.send(await TestRepo.find());
})