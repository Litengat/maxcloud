import {
  getIconForFile,
  getIconForFolder,
  getIconForOpenFolder,
} from "vscode-icons-js";
import { FileData, FileType } from "@/types/File";
import Image from "next/image";
import Link from "next/link";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { getFile, getFileURL } from "@/server/file";
import { useEffect, useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Download } from "lucide-react";
import { useRouter } from "next/router";

export function FileDisplay({ file }: { file: FileData }) {
  const [openDownloadDialog, setOpenDownloadDialog] = useState(false);
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

function DownloadDialog({
  file,
  open,
  setOpen,
}: {
  file: FileData;
  open: boolean;
  setOpen: (arg0: boolean) => void;
}) {
  const [downloadURL, setDownloadURL] = useState("");
  useEffect(() => {
    getFileURL(file.path).then(setDownloadURL);
  }, []);
  return (
    <AlertDialog open={open}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Download {file.name}?</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to download {file.name}?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => setOpen(false)}>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={() => {
              window.open(downloadURL, "_blank");
              setOpen(false);
            }}
          >
            Download
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
