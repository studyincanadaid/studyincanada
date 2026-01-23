import { NextRequest, NextResponse } from "next/server"

const API_BASE_URL = "https://go-study-backend.vercel.app"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, password } = body

    if (!name || !email || !password) {
      return NextResponse.json(
        { success: false, message: "Name, email, and password are required" },
        { status: 400 }
      )
    }

    const response = await fetch(`${API_BASE_URL}/api/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
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
    console.error("Registration proxy error:", error)
    
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

