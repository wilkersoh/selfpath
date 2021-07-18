import { Prisma } from "@prisma/client";
import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method != "GET")
    return res.status(405).json({ message: "Method not allowed" });

  try {
    const users = await prisma.user.findMany();

    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ message: "Failed to save data" });
  }
};
