"use client";

import { MediaService } from "@/services/MediaService";
import { Category } from "@prisma/client";
import { CldUploadButton } from "next-cloudinary";
import { useRouter } from "next/navigation";

export interface CloudinaryImage {
  event: string;
  info: {
    id: string;
    batchId: string;
    asset_id: string;
    public_id: string;
    version: number;
    version_id: string;
    signature: string;
    width: number;
    height: number;
    format: string;
    resource_type: string;
    created_at: string;
    tags: string[];
    bytes: number;
    type: string;
    etag: string;
    placeholder: boolean;
    url: string;
    secure_url: string;
    folder: string;
    access_mode: string;
    original_filename: string;
    path: string;
    thumbnail_url: string;
  };
}

export interface CloudinaryWidget {
  close: (t: { quiet: boolean }) => void;
  destroy: (t: unknown) => void;
  hide: () => void;
  isDestroyed: () => void;
  isMinimized: () => void;
  isShowing: () => void;
  minimize: () => void;
  open: (t: unknown, e: unknown) => void;
  show: () => void;
  update: (t: unknown) => void;
}

interface CloudinaryUploaderProps {
  category: Category;
}

export default function CloudinaryUploader({
  category,
}: CloudinaryUploaderProps) {
  const router = useRouter();

  const onUpload = (result: CloudinaryImage, widget: CloudinaryWidget) => {
    MediaService.create({
      assetId: result.info.asset_id,
      height: result.info.height.toString(),
      originalFilename: result.info.original_filename,
      thumbnailUrl: result.info.thumbnail_url,
      url: result.info.url,
      width: result.info.width.toString(),
    });

    widget.close({ quiet: true });
    router.push("/category");
  };

  return (
    <CldUploadButton
      uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_PRESET}
      onUpload={onUpload}
    />
  );
}
