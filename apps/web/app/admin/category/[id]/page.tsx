import CategoryForm from "@/components/forms/CategoryForm";
import { CategoryService } from "@/services/CatogoryService";
import { redirect } from "next/navigation";

import CategoryPreview from "@/components/images/CategoryPreview";
import MediaList from "@/components/media/MediaList";

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
      <div className="flex flex-row">
        <CategoryPreview media={category.media} />
        {/* @ts-expect-error Server Component */}
        <MediaList />
      </div>
    </>
  );
}
