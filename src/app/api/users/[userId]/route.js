import { User } from "@/app/models/user";
import { NextResponse } from "next/server";

export async function DELETE(request, { params }) {
    try {
        await User.deleteOne({ _id: params.userId })
        return NextResponse.json({
            message: "user deleted",
            status: true
        })

    } catch (err) {
        return NextResponse.json({
            message: "user not deleted",
            status: false
        })
    }

}

export async function GET(request, { params }) {
    let user = {}
    try {
        user = await User.findById({ _id: params.userId })
        return NextResponse.json({
            user
        })

    } catch (err) {
        return NextResponse.json({
            message: "user not fetched",
            status: false
        })
    }

}
export async function PUT(request, { params }) {
    const { userId } = params
    const { name, email, password, about, profileURL } = await request.json()
    console.log(name, userId)
    try {
        const user = await User.findById({ _id: userId })
        user.name = name,
            user.about = about,
            user.email = email,
            user.password = password,
            user.profileURL = profileURL
        const updated_user = await user.save()
        return NextResponse.json(updated_user)
    } catch (err) {
        return NextResponse.json({
            message: "user not updated",
            status: false
        })
    }

}