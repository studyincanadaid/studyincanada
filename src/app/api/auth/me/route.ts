import { NextRequest, NextResponse } from "next/server"

const API_BASE_URL = "https://go-study-backend.vercel.app"

export async function GET(request: NextRequest) {
  try {
    const authHeader = request.headers.get("authorization")

    if (!authHeader) {
      return NextResponse.json(
        { success: false, message: "Authorization header is required" },
        { status: 401 }
      )
    }

    const response = await fetch(`${API_BASE_URL}/api/auth/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: authHeader,
      },
    })

    // Handle response - try to parse JSON, but handle non-JSON responses
    let data
    try {
      const text = await response.text()
      data = text ? JSON.parse(text) : {}
    } catch (parseError) {
      // If response is not JSON, return a generic error
      return NextResponse.json(
        {
          success: false,
          message: "Invalid response from backend server. Please try again later.",
        },
        { status: response.status || 500 }
      )
    }

    // Pass through the backend response, including error messages
    return NextResponse.json(data, { status: response.status })
  } catch (error) {
    console.error("Get me proxy error:", error)
    
    // Handle fetch errors (network issues, backend down, etc.)
    if (error instanceof TypeError && error.message.includes("fetch")) {
      return NextResponse.json(
        {
          success: false,
          message: "Unable to connect to the server. The backend service may be unavailable. Please try again later.",
        },
        { status: 503 }
      )
    }
    
    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error ? error.message : "Internal server error. Please try again later.",
      },
      { status: 500 }
    )
  }
}

