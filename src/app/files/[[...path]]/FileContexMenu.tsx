import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
  ContextMenuSeparator,
} from "@/components/ui/context-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";

import { deleteFile, getFileURL } from "@/server/file";
import type { FileData } from "@/types/File";
import { useEffect, useState } from "react";
import { FileDisplay } from "./grid/file-display";
import { toast } from "sonner";
export function FileContextMenu({
  children,
  file,
}: {
  children: React.ReactNode;
  file: FileData;
}) {
  const [openDownloadDialog, setOpenDownloadDialog] = useState(false);
  const [openRenameDialog, setOpenRenameDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  return (
    <>
      <ContextMenu>
        <ContextMenuTrigger>{children}</ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem
            onClick={() => window.open("/files/" + file.path, "_blank")}
          >
            Open
          </ContextMenuItem>
          <ContextMenuItem onClick={() => setOpenDownloadDialog(true)}>
            Download
          </ContextMenuItem>
          <ContextMenuItem onClick={() => setOpenRenameDialog(true)}>
            Rename
          </ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem onClick={() => setOpenDeleteDialog(true)}>
            <p className="text-red-500">Delete</p>
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
      {openDownloadDialog ? (
        <DownloadDialog
          filedata={file}
          open={openDownloadDialog}
          setOpen={setOpenDownloadDialog}
        />
      ) : null}
      {openRenameDialog ? (
        <RenameDialog
          filedata={file}
          open={openRenameDialog}
          setOpen={setOpenRenameDialog}
        />
      ) : null}
      {openDeleteDialog ? (
        <DeleteDialog
          file={file}
          openDialog={openDeleteDialog}
          setOpenDialog={setOpenDeleteDialog}
        />
      ) : null}
    </>
  );
}

function DownloadDialog({
  filedata,
  open,
  setOpen,
}: {
  filedata: FileData;
  open: boolean;
  setOpen: (arg0: boolean) => void;
}) {
  const [downloadURL, setDownloadURL] = useState("");
  useEffect(() => {
    void getFileURL(filedata.path).then(setDownloadURL);
  }, [filedata.path]);
  return (
    <AlertDialog open={open}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Download {filedata.name}?</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to download {filedata.name}?
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
function RenameDialog({
  filedata,
  open,
  setOpen,
}: {
  filedata: FileData;
  open: boolean;
  setOpen: (arg0: boolean) => void;
}) {
  const [file, setFile] = useState<FileData>(filedata);
  return (
    <AlertDialog open={open}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Rename {filedata.name}?</AlertDialogTitle>
          <AlertDialogDescription>
            <div className="items-center">
              <FileDisplay file={file} />
            </div>
            <Input
              id="link"
              defaultValue={file.name}
              onChange={(e) => setFile({ ...file, name: e.target.value })}
            />
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => setOpen(false)}>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={() => {
              console.log("rename");
            }}
          >
            Rename
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
function DeleteDialog({
  file,
  openDialog,
  setOpenDialog,
}: {
  file: FileData;
  openDialog: boolean;
  setOpenDialog: (arg0: boolean) => void;
}) {
  return (
    <AlertDialog open={openDialog}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Delete <b>{file.name}</b>?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to delete <b>{file.name}</b>?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => setOpenDialog(false)}>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={() => {
              void deleteFile(file.path);
              setOpenDialog(false);
              toast(file.name + " deleted");
            }}
            className="bg-red-600 text-white hover:bg-red-800"
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
