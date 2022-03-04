import mongoose from "mongoose";
import {Schema} from "mongoose";

export interface AssignmentDocument extends mongoose.Document {
    tests: [
        {
            id: string,
            assignedBy: string,
            date: Date
        }
    ]
}

const AssignmentSchema = new mongoose.Schema(
    {
        tests: [
            {
                id: {
                    type: Schema.Types.ObjectId,
                    ref: "Test"
                },
                assignedBy: {type: String, required: true, unique: false},
                date: {type: Date, required: true, unique: false}
            }
        ]
    }
);


const AssignmentRepo = mongoose.model<AssignmentDocument>("Assignment", AssignmentSchema);

export default AssignmentRepo;



