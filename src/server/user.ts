"use server";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth";

export async function setUserRole() {
  const session = await getServerSession(authOptions);
}
