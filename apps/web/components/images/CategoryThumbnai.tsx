"use client";

import { Media } from "@prisma/client";
import Image from "next/image";
import placeholder from "@/assets/images/image-placeholder.png";

interface CategoryListProps {
  media: Media | null;
}

export default function CategoryThumbnai({ media }: CategoryListProps) {
  return (
    <div className="relative w-8 h-8 rounded-full overflow-hidden">
      <Image
        fill
        src={media?.thumbnailUrl || placeholder.src}
        alt={media?.originalFilename || "Placeholder"}
      />
    </div>
  );
}
