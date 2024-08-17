import { getServerSession } from "next-auth";
import { authOptions } from "@/server/auth";
import { hasUserPermission, Permission } from "@/types/Permissions";
import PermissionDenied from "@/components/PermissionDenied";

const permission = Permission.Admin_page;

export default async function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const session = await getServerSession(authOptions);
  session?.expires;
  if (!hasUserPermission(session?.user.permissions, permission))
    return <PermissionDenied permission={permission} />;

  return <>{children}</>;
}
