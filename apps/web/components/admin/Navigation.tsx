"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminNavigation() {
  const pathname = usePathname();

  const links: { label: string; href: string }[] = [
    {
      label: "Strona główna",
      href: "/",
    },
    {
      label: "Produkty",
      href: "/admin/product",
    },
    {
      label: "Tagi",
      href: "/admin/tag",
    },
    {
      label: "Kategorie",
      href: "/admin/category",
    },
    {
      label: "Zdjęcia",
      href: "/admin/media",
    },
  ];

  const activeClass =
    "inline-block w-full p-4 text-gray-900 bg-gray-100 active focus:outline-none dark:bg-gray-700 dark:text-white";
  const inactiveClass =
    "inline-block w-full p-4 bg-white hover:text-gray-700 hover:bg-gray-50 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700";

  return (
    <nav>
      <ul className="text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
        {links.map((link) => (
          <li key={link.label} className="w-full">
            <Link
              href={link.href}
              className={link.href === pathname ? activeClass : inactiveClass}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
