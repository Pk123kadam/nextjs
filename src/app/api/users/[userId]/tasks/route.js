import { getResponseMessage } from "@/app/helper/responseMessage";
import { Task } from "@/app/models/tasks";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    try {
        let data = await Task.findOne({ userId: params.userId })
        return NextResponse.json(data)

    } catch (err) {
        return getResponseMessage("unable to get users task", 500, false)
    }
}

export async function PUT(request, { params }) {
    try {
        const { title, content, userId } = await request.json()
        let data = await Task.findById({ userId: params.userId })
        console.log('data', data)
        data.title = title,
            data.content = content,
            data.userId = userId
        let updated_data = await data.save()
        return NextResponse.json(updated_data)

    } catch (err) {
        return getResponseMessage("unable to edit users tasks", 500, false)

    }
}