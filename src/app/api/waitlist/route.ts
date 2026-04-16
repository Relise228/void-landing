import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, feature, hours } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Valid email is required" },
        { status: 400 }
      );
    }

    // Authenticate with Google
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    const sheets = google.sheets({ version: "v4", auth });
    
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;
    
    // Check missing environment variables
    if (!process.env.GOOGLE_CLIENT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY || !process.env.GOOGLE_SHEET_ID) {
      console.error("Missing Google credentials in environment variables");
      return NextResponse.json({ error: "Server Configuration Error" }, { status: 500 });
    }

    // Append to sheet: A (Email), B (Feature), C (Hours/week), D (Date)
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "A:D",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [email, feature || "", hours || "", new Date().toISOString()],
        ],
      },
    });

    return NextResponse.json({ success: true, data: response.data });
  } catch (error) {
    console.error("Waitlist error:", error);
    return NextResponse.json(
      { error: "Failed to join waitlist" },
      { status: 500 }
    );
  }
}
