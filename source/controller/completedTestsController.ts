import express from "express";
import CompletedTestRepo, {CompletedTestsRepo} from "../repo/completedTestsRepo";

export const getCompletedTests = (async (req: express.Request, res: express.Response) => {
    res.send(await CompletedTestRepo.find({username:req.query.username as string}));
})
export const postCompletedTests = (async (req: express.Request<{completedTests:CompletedTestsRepo}>, res: express.Response) => {
    const {completedTests} = req.body;
    res.send(await CompletedTestRepo.create(completedTests));
})