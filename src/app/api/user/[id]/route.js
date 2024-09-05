import { NextResponse } from "next/server"
import { user } from "@/util/db"

export function GET(request, { params }) {
    // Filter users by id
    const userData = user.filter(item => item.id == params.id);
    
    // Return response
    return NextResponse.json(
        userData.length == 0 
            ? { result: "No Data Found", success: false } 
            : { result: userData[0], success: true }, 
        { status: 200 }
    );
}
