import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";



const prisma = new PrismaClient()

export const POST = async (req: Request, res: NextResponse) => {
    const insertData = await req.json();

    const userData = await prisma.user.create({
        data: insertData
    })
    
    return NextResponse.json(userData);
}