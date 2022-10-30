import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    return await createScore(req, res);
  } else {
    return res
      .status(405)
      .json({ message: "Method not allowed", success: false });
  }
}

async function createScore(req: NextApiRequest, res: NextApiResponse) {
  const { userId, worldle, sutom } = req.body;
  try {
    const newEntry = await prisma.dailyScore.create({
      data: {
        userId: parseInt(userId, 10),
        worldle: parseInt(worldle, 10),
        sutom: parseInt(sutom, 10),
      },
    });
    return res.status(200).json(newEntry);
  } catch (error) {
    console.error("Request error", error);
    res.status(500).json({ error: "Error creating score", success: false });
  }
}
