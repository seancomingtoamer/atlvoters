import { NextRequest, NextResponse } from "next/server";

const AIRTABLE_BASE_ID = "appNbcFPHeO45oSEY";
const AIRTABLE_TABLE = "ATLVoters_Emails";
const AIRTABLE_URL = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE}`;

export async function POST(request: NextRequest) {
  try {
    const { email, source, quizResult } = await request.json();

    if (!email || !source) {
      return NextResponse.json(
        { error: "Email and source are required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    const token = process.env.AIRTABLE_TOKEN;
    if (!token) {
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    // Check for duplicate
    const searchUrl = `${AIRTABLE_URL}?filterByFormula={Email}="${encodeURIComponent(email)}"&maxRecords=1`;
    const searchRes = await fetch(searchUrl, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const searchData = await searchRes.json();

    if (searchData.records && searchData.records.length > 0) {
      return NextResponse.json({
        success: true,
        message: "You're already on the list!",
        duplicate: true,
      });
    }

    // Create new record
    const fields: Record<string, string> = {
      Email: email,
      Source: source,
      Signup_Date: new Date().toISOString(),
      Status: "Active",
    };

    if (quizResult) {
      fields.Quiz_Result = quizResult;
    }

    const createRes = await fetch(AIRTABLE_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fields }),
    });

    if (!createRes.ok) {
      throw new Error("Failed to save email");
    }

    return NextResponse.json({
      success: true,
      message: "You're in! Welcome to ATL Voters.",
      duplicate: false,
    });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Try again." },
      { status: 500 }
    );
  }
}
