import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: [true, "Email Required!!"]
    },
    password: {
        type: String,
        required: [true, "Password Required!!"]
    },
    about: String,
    profileURL: String,
    // address:{
    //     street:String,
    //     city:String,
    //     country:String,

    // }
})
export const User = mongoose.models.users || mongoose.model("users", userSchema)