import mongoose from "mongoose";
import {Schema} from "mongoose";

export interface CompletedTestsRepo extends mongoose.Document {
    username: string,
    testPassed: number,
    avgScore: number,
    tests: [
        {
            id:string,
            title: string,
            category: string,
            score: number
        }
        ]
}

const CompletedTestsSchema = new mongoose.Schema(
    {
        username: {type: String, required: true, unique: false},
        testPassed: {type: Number, required: true, unique: false},
        avgScore: {type: Number, required: true, unique: false},
        tests: [
            {
                testId: {
                    type: Schema.Types.ObjectId,
                    ref: "Test"
                },
                title: {type: String, required: true, unique: false},
                category: {type: String, required: true, unique: false},
                score:{type: Number, required: true, unique: false}
            }
        ]
    }
);


const CompletedTestRepo = mongoose.model<CompletedTestsRepo>("CompletedTests", CompletedTestsSchema);

export default CompletedTestRepo;



