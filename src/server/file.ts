/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use server";
import type { FileData, getDirResponse } from "@/types/File";

const url = "http://localhost:3010/";

export async function getFolder(path: string): Promise<getDirResponse> {
  const response = await fetch(`${url}file/getdir/${path}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data: getDirResponse = await response.json();
  console.log("dir Resopnse", data);
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
  console.log("fileURL", text);
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
  console.log("file Resopnse", data);
  return data;
}
export async function deleteFile(path: string) {
  await fetch(`${url}file/delfile/${path}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
}
