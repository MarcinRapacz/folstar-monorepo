import { Media, PrismaClient } from "@prisma/client";

export class MediaController {
  private db: PrismaClient;

  constructor() {
    this.db = new PrismaClient();
  }

  getAll() {
    return this.db.media.findMany();
  }

  create(data: Media) {
    return this.db.media.create({
      data,
    });
  }
}
