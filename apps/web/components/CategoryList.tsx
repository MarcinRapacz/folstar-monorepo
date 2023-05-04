"use client";

import { CategoryService } from "@/services/CatogoryService";
import { Category, Media } from "@prisma/client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MdDeleteOutline, MdOutlineEdit } from "react-icons/md";
import CategoryThumbnai from "@/components/images/CategoryThumbnai";

interface CategoryListProps {
  categories: (Category & {
    media: Media | null;
  })[];
}

export default async function CategoryList({ categories }: CategoryListProps) {
  const router = useRouter();

  const onRemoveClick = async (id: string) => {
    await CategoryService.remove(id);
    router.refresh();
  };

  return (
    <ul className="w-full divide-y divide-gray-200 dark:divide-gray-700">
      {categories.map((category) => (
        <li key={category.id} className="p-2 sm:p-4">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <CategoryThumbnai media={category.media} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                {category.name}
              </p>
              <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                {category.description}
              </p>
            </div>

            <div className="inline-flex rounded-md shadow-sm" role="group">
              <Link
                href={`/admin/category/${category.id.toString()}`}
                className="inline-flex items-center gap-2 text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-l-lg text-sm px-5 py-2.5 text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
              >
                <MdOutlineEdit size={20} />
                <span className="hidden md:inline">Edytuj</span>
              </Link>
              <button
                type="button"
                className="inline-flex items-center gap-2 text-red-700 hover:text-white border-r border-t border-b border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-r-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                onClick={() => onRemoveClick(category.id)}
              >
                <MdDeleteOutline size={20} />
                <span className="hidden md:inline">Usuń</span>
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
