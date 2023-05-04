import CategoryList from "@/components/CategoryList";
import CategoryForm from "@/components/forms/CategoryForm";
import { CategoryService } from "@/services/CatogoryService";

export default async function CategoryIndex() {
  const categories = await CategoryService.getAll();

  return (
    <>
      <CategoryForm mode="create" />
      {/* @ts-expect-error Server Component */}
      <CategoryList categories={categories} />
    </>
  );
}
