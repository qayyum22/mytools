import { Schema, model } from "mongoose";


const TodoSchema = Schema({
    todoHeading: {
        type: String,
        trim: true,
        required: true,
    },
    Description: {
        type: String,
        trim: true,
        required: true,
    },
    // to be completed by date
    TBC: {
        type: String,
        trim: true,
        required: true,
    }
}, { timestamps: true }
);

export default model("Todo", TodoSchema);
