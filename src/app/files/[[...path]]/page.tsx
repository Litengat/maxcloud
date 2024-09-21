import { cookies } from "next/headers";
import Resizable from "./Resizeble";
import { getServerSession } from "next-auth";
import { authOptions } from "@/server/auth";
import { hasUserPermission, Permission } from "@/types/Permissions";
import PermissionDenied from "@/components/PermissionDenied";

const permission = Permission.File_read;

export default async function FilesPage() {
  const session = await getServerSession(authOptions);
  session?.expires;
  if (!hasUserPermission(session?.user.permissions, permission))
    return <PermissionDenied permission={permission} />;

  const layout = cookies().get("files-resizable:layout");
  const tab = cookies().get("files-displayTab:Value");
  let defaultLayout: number[] | undefined;
  let defaultTab: string | undefined;
  if (layout) {
    defaultLayout = JSON.parse(layout.value) as number[];
  }
  if (tab) {
    defaultTab = tab.value;
  }
  return (
    <Resizable
      defaultLayout={defaultLayout}
      defaultTab={defaultTab}
    ></Resizable>
  );
}
