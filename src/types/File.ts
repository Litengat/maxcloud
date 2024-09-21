export type FileData = {
  name: string;
  path: string;
  type: FileType;
  size: number;
  lastModified: number;
  url: string;
};

export enum FileType {
  File = "file",
  Folder = "folder",
}

export type getDirResponse = {
  FileType: FileType;
  Files: FileData[];
};
