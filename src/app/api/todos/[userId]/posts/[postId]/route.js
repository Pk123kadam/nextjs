import { NextResponse } from "next/server";

export function GET(request, { params }) {
    return NextResponse.json({ params })
}

export function PUT() {
    return NextResponse.json({
        message: "updated"
    })
}

export function POST(request) {
    return NextResponse.json({ params })
}