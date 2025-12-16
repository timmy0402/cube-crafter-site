import { NextResponse } from 'next/server';

export async function GET() {
  const token = process.env.DISCORD_BOT_TOKEN;

  if (!token) {
    return NextResponse.json({ count: null, error: 'DISCORD_BOT_TOKEN not configured' }, { status: 500 });
  }

  try {
    const response = await fetch('https://discord.com/api/v10/users/@me/guilds?limit=200', {
      headers: {
        Authorization: `Bot ${token}`,
      },
      next: { revalidate: 3600 } // Cache for 1 hour
    });

    if (!response.ok) {
      console.error('Discord API Error:', response.status, response.statusText);
      return NextResponse.json({ count: null, error: 'Failed to fetch from Discord' }, { status: response.status });
    }

    const guilds = await response.json();
    // Note: This endpoint has a limit of 200. 
    // If you need >200, you'll need to implement pagination using the 'after' query param.
    return NextResponse.json({ count: guilds.length });
  } catch (error) {
    console.error('Server Count Fetch Error:', error);
    return NextResponse.json({ count: null, error: 'Internal Server Error' }, { status: 500 });
  }
}
