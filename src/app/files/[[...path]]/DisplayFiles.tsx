import { getFileType } from "@/server/file";
import { FileType } from "@/types/File";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import DisplayFolders from "./DisplayFolders";
import FileViewer from "@/components/Fileviewer";

export default function DisplayFiles({ defaultTab }: { defaultTab: string }) {
  const params = useParams<{ path: string[] }>();
  const path = params.path ? params.path.join("/") : ".";
  const [fileType, setFileType] = useState<FileType>();

  useEffect(() => {
    getFileType(path).then(setFileType);
  }, []);

  if (!fileType) return <p>Loading Files...</p>;

  return (
    <>
      {fileType === FileType.Folder ? (
        <DisplayFolders defaultTab={defaultTab} />
      ) : (
        <FileViewer path={path} />
      )}
    </>
  );
}
