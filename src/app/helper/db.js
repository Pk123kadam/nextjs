import mongoose from "mongoose"
import { User } from "../models/user"

export const connectDb = async () => {
    try {
        const { connection } = await mongoose.connect(process.env.MONGO_DB_URL, {
            dbName: "work_manager"
        })
        console.log("db connected..")
        // const usser = new User({
        //     name: "test name",
        //     email: "test@gmail.com",
        //     password: "1234",
        //     about: "this is testing"
        // })
        // await usser.save()
        console.log(connection)

    } catch (err) {
        console.log(`failed to connect ${err}`)
    }
}