"use client";

import { MediaService } from "@/services/MediaService";
import { CldUploadButton } from "next-cloudinary";
import { useRouter } from "next/navigation";
import { MdOutlineCloudUpload } from "react-icons/md";

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

export default function CloudinaryUploader() {
  const router = useRouter();

  const onUpload = async (
    result: CloudinaryImage,
    _widget: CloudinaryWidget
  ) => {
    await MediaService.create({
      assetId: result.info.asset_id,
      height: result.info.height.toString(),
      originalFilename: result.info.original_filename,
      thumbnailUrl: result.info.thumbnail_url,
      url: result.info.url,
      width: result.info.width.toString(),
    });

    router.refresh();
  };

  return (
    <CldUploadButton
      uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_PRESET}
      onUpload={onUpload}
    >
      <span className="flex items-center gap-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
        <MdOutlineCloudUpload size={24} />
        Dodaj nowe zdjęcie
      </span>
    </CldUploadButton>
  );
}
