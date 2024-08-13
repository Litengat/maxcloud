/* import type { NextApiRequest, NextApiResponse } from "next";

const url = "http://localhost:3010/";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { filepath } = req.query;
  const response = await fetch(`${url}file/getfile/${filepath}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/stream",
    },
  });
  res.status(response.status).send(response.body);
}
export { handler as GET, handler as POST };
 */
