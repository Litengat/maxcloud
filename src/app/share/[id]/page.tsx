import { authOptions } from "@/server/auth";
import { getFileByID } from "@/server/sharedfile";
import { type SharedFile } from "@/types/SharedFile";
import { getServerSession } from "next-auth";
export default async function Page({ params }: { params: { id: string } }) {
  const file: SharedFile | undefined = await getFileByID(params.id);
  const session = await getServerSession(authOptions);
  if (!file) {
    return <></>;
  }
  if (file.secured) {
    if (!session) {
      return <>You are not loged in</>;
    }
    if (
      !file.sharedWith.includes(session.user.id) ||
      file.sharedBy === session.user.id
    ) {
      return <>The file is not shared with you</>;
    }
  }

  return (
    <div className="h-scree flexn relative z-0">
      <div className="z-10 mx-auto max-w-2xl bg-red-200 p-4"></div>
      <div className="absolute inset-y-0 left-0 z-10 w-1/3 bg-green-400"></div>
    </div>
  );
}
