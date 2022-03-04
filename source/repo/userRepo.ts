import mongoose from "mongoose";
import Schema from "mongoose";
import bcrypt from "bcrypt";

export interface UserDocument extends mongoose.Document {
    email: string;
    username: string;
    password: string;
    role: string;
    assignedTests: [String];
}

const UserSchema = new mongoose.Schema(
    {
        email: {type: String, required: true, unique: true},
        username: {type: String, required: true},
        password: {type: String, required: true},
        role: {type: String, required: true},
        assignedTests: [{
            type: Schema.Types.ObjectId,
            ref: 'Assignment'
        }]
    }
);


const UserRepo = mongoose.model<UserDocument>("User", UserSchema);

export default UserRepo;