import { Task } from "@/app/models/tasks"
import { NextResponse } from "next/server"
import { getResponseMessage } from "@/app/helper/responseMessage"
import jwt from "jsonwebtoken";


export async function GET(request) {
    try {
        const task = await Task.find()
        return NextResponse.json(task)

    } catch (err) {
        return getResponseMessage("error in getting data", 404, false)
    }
}
export async function POST(request) {
    const { title, content, userId } = await request.json()
    try {
        const authToken = request.cookies.get("authToken")?.value
        const data = jwt.verify(authToken, process.env.JWT_KEY)
        const task = new Task({
            title, content, userId: data._id
        })
        const createdTask = await task.save()
        return NextResponse.json(createdTask, {
            status: 201
        })

    } catch (err) {
        return getResponseMessage("failed to create task!!", 500, false)
    }
}
