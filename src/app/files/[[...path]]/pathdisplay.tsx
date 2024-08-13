import * as React from "react";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useParams } from "next/navigation";

const ITEMS_TO_DISPLAY = 5;

export default function PathDisplay() {
  const [open, setOpen] = React.useState(false);
  const params = useParams<{ path: string[] }>();
  const path = params.path;
  if (!path) return <p>/</p>;

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {path.length > 1 ? (
          <>
            <BreadcrumbItem>
              <BreadcrumbLink href={arrayToPath([path[0] ?? ""])}>
                {path[0]}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </>
        ) : null}
        {path.length > ITEMS_TO_DISPLAY + 1 ? (
          <>
            <BreadcrumbItem>
              <DropdownMenu open={open} onOpenChange={setOpen}>
                <DropdownMenuTrigger
                  className="flex items-center gap-1"
                  aria-label="Toggle menu"
                >
                  <BreadcrumbEllipsis className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  {path
                    .slice(1, path.length - ITEMS_TO_DISPLAY + 1)
                    .map((item, index) => (
                      <DropdownMenuItem key={index}>
                        <Link href={arrayToPath(path.slice(0, index + 1))}>
                          {item}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </>
        ) : null}
        {path
          .slice(
            path.length > ITEMS_TO_DISPLAY + 1
              ? path.length - ITEMS_TO_DISPLAY + 1
              : 1,
            path.length - 1,
          )
          .map((item, index) => (
            <PathItem key={index} index={index} item={item} path={path} />
          ))}
        <BreadcrumbItem>
          <BreadcrumbPage className="max-w-20 truncate md:max-w-none">
            {path[path.length - 1]}
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}

function arrayToPath(array: string[]) {
  return "/files/" + array.join("/");
}

function PathItem({
  index,
  item,
  path,
}: {
  index: number;
  item: string;
  path: string[];
}) {
  return (
    <>
      <BreadcrumbItem>
        <BreadcrumbLink asChild className="max-w-20 truncate md:max-w-none">
          <Link
            href={arrayToPath(
              path.slice(
                0,
                path.length > ITEMS_TO_DISPLAY
                  ? path.length - ITEMS_TO_DISPLAY
                  : 0 + index + 2,
              ),
            )}
          >
            {item}
          </Link>
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
    </>
  );
}
