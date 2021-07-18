import { PrismaClient } from "@prisma/client";

declare global {
  namespace NodeJS {
    interface Global {
      prisma: PrismaClient;
    }
  }
}

/**
  npx prisma generate
  把我們做的model 放進 prisma package裡
  然後 我們能通過 prisma object 直接指向我們的 model 名
  prisma.user.create()  @user 就是我們在 prisma.scheme裡的 model
*/
let prisma: PrismaClient;

if (typeof window === "undefined") {
  if (process.env.NOVE_ENV === "production") {
    prisma = new PrismaClient();
  } else {
    if (!global.prisma) {
      global.prisma = new PrismaClient();
    }

    prisma = global.prisma;
  }
}

export default prisma;
