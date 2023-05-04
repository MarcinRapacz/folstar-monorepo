import { Media } from "@prisma/client";
import Image from "next/image";
import placeholder from "@/assets/images/image-placeholder.png";

interface CategoryPreviewProps {
  media: Media | null;
}

export default function CategoryPreview({ media }: CategoryPreviewProps) {
  return (
    <Image
      width={600}
      height={600}
      src={media?.url || placeholder.src}
      alt={media?.originalFilename || "Upload image"}
    />
  );
}
