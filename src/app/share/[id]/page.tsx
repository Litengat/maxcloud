import { FileDisplay } from "./FileDisplay";
import { authOptions } from "@/server/auth";
import { getFileByID } from "@/server/sharedfile";
import { type SharedFile } from "@/types/SharedFile";
import { getServerSession } from "next-auth";
import Image from "next/image";
const background = [
  "https://images.unsplash.com/photo-1542856391-010fb87dcfed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1520374147637-a5d2462e1872?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1517444175997-8f00340995bc?q=80&w=2013&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1700981293090-f78b500fc92c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

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
    <div className="flex">
      <div className="">
        <Image
          className="rounded-[50px] p-5 pr-[300px]"
          src={background[Math.floor(Math.random() * background.length)] ?? ""}
          objectFit="cover"
          fill
          alt="background"
        />
      </div>
      <div className="">
        <FileDisplay path={file.path}></FileDisplay>
      </div>
    </div>
  );
}
