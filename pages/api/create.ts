// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { Prisma } from "@prisma/client";
import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method != "POST")
    return res.status(405).json({ message: "Method not allowed" });

  try {
    const user: Prisma.UserCreateInput = JSON.parse(req.body);
    const savedUser = await prisma.user.create({
      data: user,
    });

    res.status(200).json(savedUser);
  } catch (error) {
    res.status(400).json({ message: "Failed to save data" });
  }
};
