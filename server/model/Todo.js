const mongoose = require("mongoose");


const TodoSchema = mongoose.Schema({
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

module.exports = mongoose.model("Todo", TodoSchema);
