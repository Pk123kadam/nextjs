import { Task } from "@/app/models/tasks"
import { NextResponse } from "next/server"

export async function GET(request) {
    try {
        const task = await Task.find()
        return NextResponse.json(task)

    } catch (err) {
        return NextResponse.json({
            message: "failed to fetch the tasks",
            status: false
        })
    }

}

export async function POST(request) {
    const { title, content, userId } = await request.json()
    try {
        const task = new Task({
            title, content, userId
        })
        const createdTask = await task.save()
        return NextResponse.json(createdTask, {
            status: 201
        })

    } catch (err) {
        return NextResponse.json({
            message: "failed to create",
            status: false
        })
    }
}
