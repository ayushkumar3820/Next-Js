import { NextResponse } from "next/server";
import { user } from "@/util/db";

export function GET(request, { params }) {
  // Filter users by id
  const userData = user.filter((item) => item.id == params.id);

  // Return response
  return NextResponse.json(
    userData.length == 0
      ? { result: "No Data Found", success: false }
      : { result: userData[0], success: true },
    { status: 200 }
  );
}

export async function PUT(request, Content) {
    // Get user data from request body
    let payload = await request.json();
    payload.id = Content.params.id;
    console.log(payload);
    if (!payload.id || !payload.name || !payload.email || !payload.password) {
      return NextResponse.json(
        { result: "Invalid Request", success: false },
        { status: 400 }
      );
    }
    return NextResponse.json({ result: payload, success: true }, { status: 200 });
  }
