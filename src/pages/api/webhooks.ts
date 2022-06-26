import { NextApiHandler } from "next";

const handler: NextApiHandler = async (_request, response) => {
  console.log("evento recebido");

  return response.status(200).json({ ok: true });
};

export default handler;
