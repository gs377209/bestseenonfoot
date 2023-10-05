import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export async function POST(req: NextRequest) {
  const body = await req.json();

  if (!body?.Name || !body?.Email || !body?.Message) {
    return NextResponse.json(
      { data: "Missing required data" },
      { status: 400 },
    );
  }

  try {
    // https://medium.com/@dmccoy/how-to-submit-an-html-form-to-google-sheets-without-google-forms-b833952cc175
    // original from: http://mashe.hawksey.info/2014/07/google-sheets-as-a-database-insert-with-apps-script-using-postget-methods-with-ajax-example/
    // original gist: https://gist.github.com/willpatera/ee41ae374d3c9839c2d6
    const response = await fetch(
      `https://script.google.com/macros/s/AKfycbw1XPnt5cBSOEd3Uu7rbm5s-NvoDew_IE67mMezJZqwnZqOJBPaYIguZPz_CXlh6o78lA/exec`,
      {
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      },
    );

    const json = await response.json();
    if (response.ok) {
      return NextResponse.json({ data: `Success` }, { status: 200 });
    } else {
      return NextResponse.json({ data: `Error: ${json}` }, { status: 502 });
    }
  } catch (error) {
    return NextResponse.json({ data: `Error: ${error}` }, { status: 502 });
  }
}
