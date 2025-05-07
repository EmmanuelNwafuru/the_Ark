"use client";

import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const SideNavBtn = ({
  nav,
}: {
  nav: {
    label: string;
    redirect: string;
    children?: { label: string; redirect: string }[] | undefined;
  };
}) => {
  const pathname = usePathname();
  const [childrenAreOpen, setChildrenAreOpen] = useState(false);

  console.log(pathname.replace("-", " "));

  return (
    <>
      {nav.children ? (
        <div className="lg h-full bg-background rounded-r flex flex-col gap-3">
          <div
            className={cn(
              "hover:bg-muted/50 px-3 py-2 rounded flex items-end justify-between",
              pathname
                .replaceAll("-", " ")
                .toLowerCase()
                .includes(nav.label.toLowerCase()) &&
                !childrenAreOpen &&
                "bg-muted"
            )}
            onClick={() => setChildrenAreOpen((prev) => !prev)}
          >
            {nav.label}
            <span className="text-muted-foreground/50">
              {childrenAreOpen ? <ChevronUp /> : <ChevronDown />}
            </span>
          </div>
          {childrenAreOpen &&
            nav.children?.map((childNav) => (
              <Link
                href={childNav.redirect}
                className={cn(
                  "hover:bg-muted/50 px-3 ml-4 py-2 rounded animate-in duration-1000",
                  pathname
                    .replaceAll("-", " ")
                    .toLowerCase()
                    .split("/")
                    .includes(childNav.label.toLowerCase()) && "bg-muted"
                )}
              >
                {childNav.label}
              </Link>
            ))}
        </div>
      ) : (
        <Link
          href={nav.redirect}
          className={cn(
            "hover:bg-muted/50 px-3 py-2 rounded",
            pathname
              .replaceAll("-", " ")
              .toLowerCase()
              .split("/")
              .includes(nav.label.toLowerCase()) && "bg-muted"
          )}
        >
          {nav.label}
        </Link>
      )}
    </>
  );
};

export default SideNavBtn;
