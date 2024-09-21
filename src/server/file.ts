/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use server";
import { FileType, type FileData, type getDirResponse } from "@/types/File";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth";
import { hasUserPermission, Permission } from "@/types/Permissions";
import { env } from "@/env";

const url = env.SERVER_URL;

export async function getFolder(path: string): Promise<getDirResponse> {
  const sesser = await getServerSession(authOptions);
  if (!hasUserPermission(sesser?.user?.permissions, Permission.File_read))
    return { FileType: FileType.File, Files: [] };
  const response = await fetch(`${url}file/getdir/${path}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      server_secret: env.SERVER_SECRET ?? "",
    },
  });
  const data: getDirResponse = await response.json();
  return data;
}

export async function getFileURL(path: string): Promise<string> {
  const sesser = await getServerSession(authOptions);
  if (!hasUserPermission(sesser?.user?.permissions, Permission.File_read))
    return "";

  const response = await fetch(`${url}file/getfileURL/${path}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      server_secret: env.SERVER_SECRET ?? "",
    },
  });
  const text = url + (await response.text());

  return text;
}
export async function getFileData(path: string): Promise<FileData> {
  const response = await fetch(`${url}file/getfiledata/${path}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      server_secret: env.SERVER_SECRET ?? "",
    },
  });
  const data: FileData = await response.json();
  return data;
}
export async function deleteFile(path: string): Promise<boolean> {
  const session = await getServerSession(authOptions);
  if (!hasUserPermission(session?.user?.permissions, Permission.File_delete))
    return false;

  await fetch(`${url}file/delfile/${path}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      server_secret: env.SERVER_SECRET ?? "",
    },
  });
  return true;
}
export async function getFileType(path: string): Promise<FileType> {
  const response = await fetch(`${url}file/getfiletype/${path}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      server_secret: env.SERVER_SECRET ?? "",
    },
    cache: "no-cache",
  });
  return (await response.text()) as FileType;
}
