import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  data: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  const body = req.body;

  if (!body.Name || !body.Email || !body.Message) {
    return res.status(400).json({ data: "Missing required data" });
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
      res.status(200).json({ data: `Success` });
    } else {
      res.status(502).json({ data: `Error: ${json}` });
    }
  } catch (error) {
    res.status(502).json({ data: `Error: ${error}` });
  }
}
