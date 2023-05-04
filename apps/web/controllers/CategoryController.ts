import { CategoryFormData } from "@/form_schemas/categorySchema";
import { PrismaClient, Category } from "@prisma/client";

export class CategoryController {
  private db: PrismaClient;

  constructor() {
    this.db = new PrismaClient();
  }

  get(id: string) {
    return this.db.category.findUnique({
      where: { id },
      include: { media: {} },
    });
  }

  getAll() {
    return this.db.category.findMany({
      include: { media: {} },
    });
  }

  create(data: Category) {
    return this.db.category.create({
      data,
    });
  }

  update(id: string, data: CategoryFormData) {
    return this.db.category.update({
      where: {
        id,
      },
      data,
    });
  }

  remove(id: string) {
    return this.db.category.delete({ where: { id } });
  }
}
