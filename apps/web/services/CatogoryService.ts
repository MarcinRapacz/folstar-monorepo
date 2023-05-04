import { CategoryController } from "@/controllers/CategoryController";
import { Category } from "@prisma/client";

export class CategoryService {
  private static endpoint = "/api/category";

  public static getById(id: string) {
    const categoryController = new CategoryController();
    return categoryController.get(id);
  }

  public static getAll() {
    const categoryController = new CategoryController();
    return categoryController.getAll();
  }

  public static create(category: Category) {
    return fetch(this.endpoint, {
      method: "POST",
      body: JSON.stringify(category),
    });
  }

  public static remove(id: string) {
    return fetch(`${this.endpoint}/${id}`, { method: "DELETE" });
  }

  public static async update(category: Category) {
    await fetch(`${this.endpoint}/${category.id}`, {
      method: "PUT",
      body: JSON.stringify(category),
    });
  }

  public static getEndpoint() {
    return this.endpoint;
  }
}
