import CloudinaryUploader from "@/components/CloudinaryUploader";
import CategoryForm from "@/components/forms/CategoryForm";
import { CategoryService } from "@/services/CatogoryService";
import { redirect } from "next/navigation";

import CategoryPreview from "@/components/images/CategoryPreview";

interface CategoryDetailsPage {
  params: {
    id: string;
  };
}

export default async function CategoryDetailsPage({
  params,
}: CategoryDetailsPage) {
  const category = await CategoryService.getById(params.id);

  if (!category) {
    return redirect("/admin/category");
  }

  return (
    <>
      <CategoryForm mode="update" category={category} />
      <CloudinaryUploader category={category} />
      <CategoryPreview media={category.media} />
    </>
  );
}
