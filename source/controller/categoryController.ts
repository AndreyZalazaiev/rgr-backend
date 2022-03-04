import express from "express";
import TestRepo from "../repo/testRepo";
import CategoryRepo from "../repo/categoryRepo";

export const getCategories = (async (req: express.Request, res: express.Response) => {
    res.send(await CategoryRepo.find());
})