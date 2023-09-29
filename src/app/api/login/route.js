import { NextResponse } from "next/server";
import { User } from "@/app/models/user";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs"



export async function POST(request) {
    try {

        const { email, password } = await request.json()

        let user = await User.findOne({
            email: email
        })
        console.log('password', user)
        if (user == null) {
            throw new Error("user not found!!")
        }
        const matched = bcrypt.compareSync(password, user.password)
        if (!matched) {
            throw new Error("password not matched!")
        }
        console.log('first')
        const token = jwt.sign({
            _id: user._id,
            name: user.name
        }, process.env.JWT_key)
        const response = NextResponse.json({
            message: "Login Success!!",
            success: true
        })
        response.cookies.set("authToken", token, {
            expiresIn: "1d",
            httpOnly: false
        })
        console.log(user)
        console.log(token)
        return response


    } catch (err) {
        return NextResponse.json({
            message: err.message,
            success: false
        }, {
            status: 500
        })
    }
}