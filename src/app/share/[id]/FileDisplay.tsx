import { getIconForFile, getIconForFolder } from "vscode-icons-js";
import { type FileData, FileType } from "@/types/File";
import Image from "next/image";
import { filesize } from "filesize";
import { formatDistanceToNow } from "date-fns/formatDistanceToNow";
import { getFileData } from "@/server/file";
import { Separator } from "@/components/ui/separator";

export async function FileDisplay({ path }: { path: string }) {
  const file = await getFileData(path);
  const icon = getIcon(file);
  return (
    <div className="flex h-[150px] w-[300px] items-center rounded-lg bg-white/10 p-2 pb-0 hover:bg-white/20">
      <div className="h-[100px] w-[100px] items-center justify-center rounded-lg bg-white/10 p-1">
        <Image
          src={"/icons/" + icon}
          width={140}
          height={140}
          alt={file.name}
        />
      </div>
      <div className="ml-4">
        <div className="space-y-1 text-center">
          <h4 className="text-lg font-medium leading-none">{file.name}</h4>
        </div>
        <Separator className="my-4" />
        <div className="flex h-5 items-center space-x-4 text-sm">
          <div>{filesize(file.size)}</div>
          <Separator orientation="vertical" />
          <div>{formatDistanceToNow(file.lastModified)}</div>
        </div>
      </div>
    </div>
  );
}

function getIcon(fileData: FileData) {
  return fileData.type === FileType.File
    ? getIconForFile(fileData.name)
    : getIconForFolder(fileData.name);
}
