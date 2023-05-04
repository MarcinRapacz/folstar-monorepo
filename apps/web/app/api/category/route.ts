import { NextResponse } from "next/server";
import { CategoryController } from "@/controllers/CategoryController";
import { categorySchema } from "@/form_schemas/categorySchema";
import { Category } from "@prisma/client";

// export async function GET() {
//   const categoryController = new CategoryController();
//   const categories = await categoryController.getAll();

//   return NextResponse.json({
//     categories,
//   });
// }

export async function POST(request: Request) {
  const body: Category = await request.json();
  const isValid = await categorySchema.isValid(body);

  // if(!isValid) {
  //   return NextResponse.error
  // }

  const categoryController = new CategoryController();
  const category = await categoryController.create(body);

  return NextResponse.json({
    category,
    isValid,
  });
}
