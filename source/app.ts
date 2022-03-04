import express from "express";
import {FRONTEND_URL, HOSTNAME, PORT} from "./config/config";
import log from "./config/logger";
import setupRoutes from "./setupRoutes";
import connectToDb from "./config/db";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors({
    origin: FRONTEND_URL
}));

app.listen(PORT, HOSTNAME, () => {
    log.info(`Server alive! port: ${PORT}, hostname: ${HOSTNAME}`);
    setupRoutes(app);
    connectToDb();
})
