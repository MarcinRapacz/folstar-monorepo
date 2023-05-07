import { MediaController } from "@/controllers/MediaController";
import { Media } from "@prisma/client";

export class MediaService {
  private static endpoint = "/api/media";

  public static create(category: Omit<Media, "id">) {
    return fetch(this.endpoint, {
      method: "POST",
      body: JSON.stringify(category),
    });
  }

  public static getAll() {
    const mediaController = new MediaController();
    return mediaController.getAll();
  }
}
