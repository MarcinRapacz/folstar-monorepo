import { NextResponse } from "next/server";
import { CategoryController } from "@/controllers/CategoryController";
import {
  CategoryFormData,
  categorySchema,
} from "@/form_schemas/categorySchema";

// export async function GET(
//   _request: Request,
// {
//   params,
// }: {
//   params: { id: string };
// }
// ) {
//   const categoryController = new CategoryController();
//   const category = await categoryController.get(+params.id);

//   return NextResponse.json({
//     category,
//   });
// }

export async function PUT(
  request: Request,
  {
    params,
  }: {
    params: { id: string };
  }
) {
  const body: CategoryFormData = await request.json();

  // const isValid = await categorySchema.isValid(body);

  const categoryController = new CategoryController();
  const category = await categoryController.update(params.id, body);

  return NextResponse.json({
    category,
  });
}

export async function DELETE(
  _request: Request,
  {
    params,
  }: {
    params: { id: string };
  }
) {
  const categoryController = new CategoryController();
  const category = await categoryController.remove(params.id);

  return NextResponse.json({
    category,
  });
}
