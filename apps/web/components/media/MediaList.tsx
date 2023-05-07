import { MediaService } from "@/services/MediaService";
import Image from "next/image";

export default async function MediaList() {
  const medias = await MediaService.getAll();

  return (
    <section className="flex flex-row flex-wrap gap-4 w-full p-4 border rounded shadow">
      {medias.map((media) => (
        <div key={media.id} className="relative">
          <Image
            className="object-contain"
            width={120}
            height={120}
            src={media.thumbnailUrl}
            alt={media.originalFilename}
          />
        </div>
      ))}
    </section>
  );
}
