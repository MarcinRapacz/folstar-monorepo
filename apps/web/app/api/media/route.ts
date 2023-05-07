import { MediaController } from "@/controllers/MediaController";
import { Media } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body: Media = await request.json();
  // const isValid = await categorySchema.isValid(body);

  // if(!isValid) {
  //   return NextResponse.error
  // }

  const mediaController = new MediaController();
  const media = await mediaController.create(body);

  return NextResponse.json({
    media,
    //   isValid,
  });
}

export async function GET() {
  const mediaController = new MediaController();
  const medias = await mediaController.getAll();
  return NextResponse.json({
    medias,
  });
}
