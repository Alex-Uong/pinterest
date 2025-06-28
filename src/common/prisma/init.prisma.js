import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Kiểm tra kết nối
try {
  await prisma.$queryRaw`SELECT 1+1 AS result`;
  console.log("Connected to Prisma");
} catch (error) {
  console.error("Error connecting to Prisma:", error);
}

export default prisma;
