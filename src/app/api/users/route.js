import { connectDb } from "@/app/helper/db"
import { User } from "@/app/models/user"
import { NextResponse } from "next/server"
connectDb()

export async function GET(request) {
    let users = []
    try {
        users = await User.find()

    } catch (err) {
        return NextResponse.json({
            message: "failed to get users",
            success: false
        })
    }
    return NextResponse.json(users)

}
export function DELETE(request) {
    return NextResponse.json({
        message: "deleted",
        status: true
    }, {
        status: 201, statusText: "hey changed text"
    })
}
export async function POST(request) {
    try {
        const { name, email, password, about, profileURL } = await request.json()
        const user = new User({
            name, email, password, about, profileURL

        })
        const createdUser = await user.save()
        const response = NextResponse.json(user, {
            status: 201
        })
        return response
    } catch (err) {
        return NextResponse.json({
            message: "failed to create user",
            status: false
        })

    }
    // const jsonData = await request.json()
    // console.log(jsonData)
    // return NextResponse.json({
    //     message: "posting your data"
    // })
}