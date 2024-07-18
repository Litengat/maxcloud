import { FileData } from "@/types/File";
import { FileDisplay } from "./file-display";
import PathDisplay from "../pathdisplay";
import { Separator } from "@/components/ui/separator";

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
import { FileContextMenu } from "../FileContexMenu";
export default function Grid({ data }: { data: FileData[] }) {
  return (
    <>
      <div className="pl-2 pb-2">
        <PathDisplay />
      </div>
      <div className="pb-2">
        <Separator />
      </div>
      <div className="flex flex-wrap gap-4">
        {data.map((file) => (
          <FileContextMenu file={file} key={file.name}>
            <FileDisplay file={file} key={file.name} />
          </FileContextMenu>
        ))}
      </div>
    </>
  );
}
