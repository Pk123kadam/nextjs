import mongoose, { Schema } from "mongoose";
const taskSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    addedDate: {
        type: Date,
        required: true,
        default: Date.now()
    },
    status: {
        type: String,
        enum: ["pending", "completed", "just_added"],
        default: "pending"
    },
    userId: {
        type: mongoose.ObjectId,
        required: true,
    }

})
export const Task = mongoose.models.tasks || mongoose.model("tasks", taskSchema)