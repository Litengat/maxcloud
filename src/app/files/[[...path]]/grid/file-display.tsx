import { getIconForFile, getIconForFolder } from "vscode-icons-js";
import { type FileData, FileType } from "@/types/File";
import Image from "next/image";
import Link from "next/link";

export function FileDisplay({ file }: { file: FileData }) {
  const icon = getIcon(file);
  return (
    <div className="h-[100px] w-[70px] items-center rounded-lg bg-white/10 p-2 pb-0 hover:bg-white/20">
      <Link href={"/files/" + file.path}>
        <div className="items-center justify-center rounded-lg bg-white/10 p-1">
          <Image
            src={"/icons/" + icon}
            width={60}
            height={60}
            alt={file.name}
          />
        </div>
        <div className="h-[38px] items-center break-words p-1 text-center text-xs">
          {file.name.substring(0, 15)}
        </div>
      </Link>
    </div>
  );
}

function getIcon(fileData: FileData) {
  return fileData.type === FileType.File
    ? getIconForFile(fileData.name)
    : getIconForFolder(fileData.name);
}
