import { getResponseMessage } from "@/app/helper/responseMessage";
import { Task } from "@/app/models/tasks";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    console.log("userid")
    try {
        let task = await Task.findById({ _id: params.taskId })
        return NextResponse.json({
            tasks: task
        })

    } catch (err) {
        return getResponseMessage("unable to get task", 500, false)
    }
}
// //get by userId
// export async function GET(request, { params }) {
//     try {
//         let user_task = await Task.findById({ userId: params.userId })
//         return NextResponse.json(user_task)
//     } catch (err) {
//         return getResponseMessage("unable to get user task", 500, false)

//     }
// }


export async function PUT(request, { params }) {
    const { title, content, userId } = await request.json()
    try {

        let task = await Task.findById({ _id: params.taskId })
        task.title = title,
            task.content = content,
            task.userId = userId
        let updated_task = await task.save()
        return NextResponse.json(
            updated_task
        )

    } catch (err) {
        console.log('err', err)
        return getResponseMessage("not able to update", 500, false)

    }

}
export async function DELETE(request, { params }) {
    try {
        let taskDelete = await Task.deleteOne({ _id: params.taskId })
        return getResponseMessage("deleted!!", 200, true)

    } catch (err) {
        return getResponseMessage("unable to delete", 500, false)
    }


}