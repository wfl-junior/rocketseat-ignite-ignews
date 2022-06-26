import { NextApiHandler } from "next";

const handler: NextApiHandler = (request, response) => {
  const id = request.query.id as string;

  const users = [
    { id: "1", name: "Diego" },
    { id: "2", name: "Dani" },
    { id: "3", name: "Rafa" },
  ];

  const user = users.find(user => user.id === id);

  if (!user) {
    return response.status(404).json({
      message: "user not found",
    });
  }

  return response.status(200).json(user);
};

export default handler;
