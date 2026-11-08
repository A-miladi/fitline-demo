import Link from "next/link";
import { ScreenLinks } from "@/components/navbar/navigation";

export default function Breadcrumbs({ path }: { path: string }) {
  const links = ScreenLinks.flatMap((item) => [item, ...(item.children || [])]);
  const current = links.find((item) => item.link === path);
  if (!current || path === "/") return null;
  const crumbs = [
    { link: "/", name: "صفحه اصلی" },
    ...(path.startsWith("/services/") ? [{ link: "/services", name: "خدمات ما" }] : []),
    current,
  ];
  return (
    <nav aria-label="مسیر صفحه" className="mx-auto w-full max-w-6xl px-4 py-4 text-xs text-gray-500 sm:text-sm">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {crumbs.map((item, index) => (
          <li key={item.link} className="flex items-center gap-2">
            {index > 0 && <span aria-hidden="true" className="text-gray-300">/</span>}
            {index === crumbs.length - 1 ? (
              <span aria-current="page" className="text-primary">{item.name}</span>
            ) : (
              <Link href={item.link} prefetch={false} className="transition-colors hover:text-primary focus-visible:underline">{item.name}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
