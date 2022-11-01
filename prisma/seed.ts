import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const data = [
  {
    name: "Sylvain",
    worldleScore: 0,
    sutomScore: 0,
    worldleGames: 0,
    sutomGames: 0,
    worldleAverage: 0,
    sutomAverage: 0,
  },
  {
    name: "Denis",
    worldleScore: 0,
    sutomScore: 0,
    worldleGames: 0,
    sutomGames: 0,
    worldleAverage: 0,
    sutomAverage: 0,
  },
  {
    name: "Benoît",
    worldleScore: 0,
    sutomScore: 0,
    worldleGames: 0,
    sutomGames: 0,
    worldleAverage: 0,
    sutomAverage: 0,
  },
  {
    name: "Youssef",
    worldleScore: 0,
    sutomScore: 0,
    worldleGames: 0,
    sutomGames: 0,
    worldleAverage: 0,
    sutomAverage: 0,
  },
  {
    name: "Bastien",
    worldleScore: 0,
    sutomScore: 0,
    worldleGames: 0,
    sutomGames: 0,
    worldleAverage: 0,
    sutomAverage: 0,
  },
  {
    name: "Alexis V",
    worldleScore: 0,
    sutomScore: 0,
    worldleGames: 0,
    sutomGames: 0,
    worldleAverage: 0,
    sutomAverage: 0,
  },
  {
    name: "Alexis L",
    worldleScore: 0,
    sutomScore: 0,
    worldleGames: 0,
    sutomGames: 0,
    worldleAverage: 0,
    sutomAverage: 0,
  },
  {
    name: "Johan",
    worldleScore: 0,
    sutomScore: 0,
    worldleGames: 0,
    sutomGames: 0,
    worldleAverage: 0,
    sutomAverage: 0,
  },
  {
    name: "Guillaume",
    worldleScore: 0,
    sutomScore: 0,
    worldleGames: 0,
    sutomGames: 0,
    worldleAverage: 0,
    sutomAverage: 0,
  },
  {
    name: "Arnaud",
    worldleScore: 0,
    sutomScore: 0,
    worldleGames: 0,
    sutomGames: 0,
    worldleAverage: 0,
    sutomAverage: 0,
  },
];

async function main() {
  await prisma.user.createMany({
    data,
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
