import { NextApiHandler } from "next";

const handler: NextApiHandler = (_request, response) => {
  const users = [
    { id: 1, name: "Diego" },
    { id: 2, name: "Dani" },
    { id: 3, name: "Rafa" },
  ];

  return response.status(200).json(users);
};

export default handler;
