import mongoose from "mongoose";
import {MONGO_CONNECTION_STRING} from "./config";
import logger from "./logger";

export default function connectToDb() {
    mongoose.connect(MONGO_CONNECTION_STRING, {useUnifiedTopology: true, useNewUrlParser: true})
        .then(() => logger.info(`Connected to db via ${MONGO_CONNECTION_STRING}`))
        .catch(() => logger.error(`Failed db connection via  ${MONGO_CONNECTION_STRING}`));
}