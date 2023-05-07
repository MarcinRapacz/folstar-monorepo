import CloudinaryUploader from "@/components/media/CloudinaryUploader";
import MediaList from "@/components/media/MediaList";

export default function MediaIndex() {
  return (
    <section className="flex flex-col items-end gap-4">
      {/* @ts-expect-error Server Component */}
      <MediaList />
      <CloudinaryUploader />
    </section>
  );
}
