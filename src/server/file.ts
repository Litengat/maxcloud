/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use server";
import type { FileData, FileType, getDirResponse } from "@/types/File";

const url = "http://localhost:3010/";

export async function getFolder(path: string): Promise<getDirResponse> {
  const response = await fetch(`${url}file/getdir/${path}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data: getDirResponse = await response.json();
  return data;
}

export async function getFileURL(path: string): Promise<string> {
  const response = await fetch(`${url}file/getfileURL/${path}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const text = response.text();
  return text;
}
export async function getFile(path: string): Promise<FileData> {
  const response = await fetch(`${url}file/getfile/${path}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data: FileData = await response.json();
  return data;
}
export async function getFileType(path: string): Promise<FileType> {
  const response = await fetch(`${url}file/getfiletype/${path}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/text",
    },
    cache: "no-cache",
  });
  return (await response.text()) as FileType;
}
export async function deleteFile(path: string) {
  console.log("deleteFile", path);
  await fetch(`${url}file/delfile/${path}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
}
