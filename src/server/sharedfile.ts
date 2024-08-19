import { eq } from "drizzle-orm";
import { db } from "./db";
import { sharedfiles } from "./db/schema";
import { type SharedFile } from "@/types/SharedFile";

export async function getFileByID(id: string): Promise<SharedFile | undefined> {
  const file = (
    await db.select().from(sharedfiles).where(eq(sharedfiles.id, id))
  )[0];
  if (!file) {
    return undefined;
  }
  return file as SharedFile;
}
