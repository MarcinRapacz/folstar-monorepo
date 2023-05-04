import { Media } from "@prisma/client";

export class MediaService {
  private static endpoint = "/api/category-image";

  public static create(category: Omit<Media, "id">) {
    return fetch(this.endpoint, {
      method: "POST",
      body: JSON.stringify(category),
    });
  }
}
