import mongoose from "mongoose";

export interface CategoryDocument extends mongoose.Document {
    name: string,
    description:string;
    testCount:number;
}

const CategorySchema = new mongoose.Schema(
    {
        name: {type: String, required: true, unique: false},
        description: {type: String, required: true, unique: false},
        testCount: {type: Number, required: true, unique: false},
    }
);


const CategoryRepo = mongoose.model<CategoryDocument>("Category", CategorySchema);

export default CategoryRepo;



