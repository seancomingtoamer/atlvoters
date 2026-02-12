import { NextRequest, NextResponse } from "next/server";

const AIRTABLE_BASE_ID = "appNbcFPHeO45oSEY";
const AIRTABLE_TABLE = "ATLVoters_Polls";
const AIRTABLE_URL = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE}`;

export async function POST(request: NextRequest) {
  try {
    const { pollId, option } = await request.json();

    if (!pollId || !option) {
      return NextResponse.json(
        { error: "Poll ID and option are required" },
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

    // Get current poll data
    const getRes = await fetch(`${AIRTABLE_URL}/${pollId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!getRes.ok) {
      return NextResponse.json(
        { error: "Poll not found" },
        { status: 404 }
      );
    }

    const pollData = await getRes.json();
    const currentVotes = pollData.fields.Votes
      ? JSON.parse(pollData.fields.Votes)
      : {};
    const currentTotal = pollData.fields.Total_Votes || 0;

    // Increment vote for selected option
    currentVotes[option] = (currentVotes[option] || 0) + 1;
    const newTotal = currentTotal + 1;

    // Calculate percentages
    const percentages: Record<string, number> = {};
    for (const [key, value] of Object.entries(currentVotes)) {
      percentages[key] = Math.round(((value as number) / newTotal) * 100);
    }

    // Update poll record
    const updateRes = await fetch(`${AIRTABLE_URL}/${pollId}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fields: {
          Votes: JSON.stringify(currentVotes),
          Total_Votes: newTotal,
        },
      }),
    });

    if (!updateRes.ok) {
      throw new Error("Failed to update vote");
    }

    return NextResponse.json({
      success: true,
      votes: currentVotes,
      percentages,
      totalVotes: newTotal,
    });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Try again." },
      { status: 500 }
    );
  }
}
