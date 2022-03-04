import express, {Express} from "express";
import UserRepo, {UserDocument} from "./repo/userRepo";
import {GenericException} from "./exception/GenericException";
import {getAssignments} from "./controller/assignmentController";
import {getTests} from "./controller/testController";
import {getCategories} from "./controller/categoryController";
import {getHomeData} from "./controller/homeController";
import {login, register} from "./controller/userController";
import {getCompletedTests, postCompletedTests} from "./controller/completedTestsController";

export default function setupRoutes(app: Express) {
    app.post("/login",login);
    app.post("/register",register);
    app.get("/assignments",getAssignments);
    app.get("/tests",getTests);
    app.get("/categories",getCategories);
    app.get("/home",getHomeData);
    app.get("/completed",getCompletedTests);
    app.post("/completed",postCompletedTests);
}
