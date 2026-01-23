import { NextRequest, NextResponse } from "next/server"

const API_BASE_URL = "https://go-study-backend.vercel.app"

// GET profile
export async function GET(request: NextRequest) {
  try {
    const authHeader = request.headers.get("authorization")

    if (!authHeader) {
      return NextResponse.json(
        { success: false, message: "Authorization header is required" },
        { status: 401 }
      )
    }

    const response = await fetch(`${API_BASE_URL}/api/profile`, {
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
      return NextResponse.json(
        {
          success: false,
          message: "Invalid response from backend server. Please try again later.",
        },
        { status: response.status || 500 }
      )
    }

    return NextResponse.json(data, { status: response.status })
  } catch (error) {
    console.error("Get profile proxy error:", error)
    
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

// POST profile (create)
export async function POST(request: NextRequest) {
  try {
    const authHeader = request.headers.get("authorization")

    if (!authHeader) {
      return NextResponse.json(
        { success: false, message: "Authorization header is required" },
        { status: 401 }
      )
    }

    const body = await request.json()

    const response = await fetch(`${API_BASE_URL}/api/profile`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: authHeader,
      },
      body: JSON.stringify(body),
    })

    // Handle response - try to parse JSON, but handle non-JSON responses
    let data
    try {
      const text = await response.text()
      data = text ? JSON.parse(text) : {}
    } catch (parseError) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid response from backend server. Please try again later.",
        },
        { status: response.status || 500 }
      )
    }

    return NextResponse.json(data, { status: response.status })
  } catch (error) {
    console.error("Create profile proxy error:", error)
    
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

// PUT profile (update)
export async function PUT(request: NextRequest) {
  try {
    const authHeader = request.headers.get("authorization")

    if (!authHeader) {
      return NextResponse.json(
        { success: false, message: "Authorization header is required" },
        { status: 401 }
      )
    }

    const body = await request.json()

    const response = await fetch(`${API_BASE_URL}/api/profile`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: authHeader,
      },
      body: JSON.stringify(body),
    })

    // Handle response - try to parse JSON, but handle non-JSON responses
    let data
    try {
      const text = await response.text()
      data = text ? JSON.parse(text) : {}
    } catch (parseError) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid response from backend server. Please try again later.",
        },
        { status: response.status || 500 }
      )
    }

    return NextResponse.json(data, { status: response.status })
  } catch (error) {
    console.error("Update profile proxy error:", error)
    
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

