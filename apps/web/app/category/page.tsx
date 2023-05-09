import { CategoryService } from "@/services/CategoryService";

export default async function CategoryPage() {
  const categoryService = new CategoryService();
  const response = await categoryService.getAll();

  return (
    <>
      {response.data.categories.map((category) => (
        <h1 key={category.id}>{category.name}</h1>
      ))}
    </>
  );
}
