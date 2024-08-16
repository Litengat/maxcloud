"use server";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth";
import { Permissions, hasUserPermission } from "@/types/Permissions";
import { db } from "./db";
import { users } from "./db/schema";
import { eq } from "drizzle-orm";

export async function setUserRole(userId: string, roleId: number) {
  const session = await getServerSession(authOptions);
  if (!session) {
    throw new Error("not logged in");
  }
  if (hasUserPermission(session.user.permissions, Permissions.Role_set)) {
    void db.update(users).set({ roleid: roleId }).where(eq(users.id, userId));
  }
}

export async function setUserPermission(
  userid: string,
  permission: Permissions,
) {
  const session = await getServerSession(authOptions);
  if (!session) {
    throw new Error("not logged in");
  }
  if (hasUserPermission(session.user.permissions, Permissions.Role_set)) {
    void db
      .update(users)
      .set({ permissions: permission })
      .where(eq(users.id, userid));
  }
}
