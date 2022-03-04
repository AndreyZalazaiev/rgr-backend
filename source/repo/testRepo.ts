import mongoose from "mongoose";
import {Schema} from "inspector";
import {number} from "yup";

export interface TestDocument extends mongoose.Document {
    name: string,
    desc: string,
    author: string,
    public: boolean,
    time: Number, //for passing test
    category: string,
    questions: [
        {
            question: string,
            answers: string[],
            correctAnswer: number,
            score: number
        }
    ]
}

const TestScheme = new mongoose.Schema(
    {
        name: {type: String, required: true, unique: false},
        desc: {type: String, required: true, unique: false},
        author: {type: String, required: true, unique: false},
        public: {type: Boolean, required: true, unique: false},
        time: {type: Number, required: true, unique: false},
        category: {type: String, required: true, unique: false},
        questions: [
            {
                question: {type: String, required: true, unique: false},
                answers: {type:[String], required: true, unique: false},
                correctAnswer: {type: Number, required: true, unique: false},
                score: {type: Number, required: true, unique: false}
            }
        ]
    }
);

const TestRepo = mongoose.model<TestDocument>("Test", TestScheme);

export default TestRepo;



