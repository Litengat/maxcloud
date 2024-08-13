import type { FileData } from "@/types/File";
import { FileDisplay } from "./file-display";
import PathDisplay from "../pathdisplay";
import { Separator } from "@/components/ui/separator";

import { FileContextMenu } from "../FileContexMenu";
import { ScrollArea } from "@/components/ui/scroll-area";
export default function Grid({ data }: { data: FileData[] }) {
  return (
    <>
      <div className="pb-2 pl-2">
        <PathDisplay />
      </div>
      <div className="pb-2">
        <Separator />
      </div>
      <ScrollArea className="h-screen">
        <div className="flex flex-wrap gap-4">
          {data.map((file) => (
            <FileContextMenu file={file} key={file.name}>
              <FileDisplay file={file} key={file.name} />
            </FileContextMenu>
          ))}
        </div>
        <div className="h-20"></div>
      </ScrollArea>
    </>
  );
}
