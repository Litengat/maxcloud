"use server";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth";
import { Permissions, hasUserPermission } from "@/types/Permissions";
import { db } from "./db";
import { roles, users } from "./db/schema";
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

export async function addUserPermissions(
  userid: string,
  permissions: Permissions[],
) {
  const session = await getServerSession(authOptions);
  if (!session) {
    throw new Error("not logged in");
  }
  if (hasUserPermission(session.user.permissions, Permissions.Role_set)) {
    const user = (await db.select().from(users).where(eq(users.id, userid)))[0];
    const userpermissions = user?.userpermissions ?? [];
    void db
      .update(users)
      .set({ userpermissions: [...userpermissions, ...permissions] })
      .where(eq(users.id, userid));
  }
}

export async function removeUserPermission(
  userid: string,
  permissions: Permissions[],
) {
  const session = await getServerSession(authOptions);
  if (!session) {
    throw new Error("not logged in");
  }
  if (hasUserPermission(session.user.permissions, Permissions.Role_set)) {
    const user = (await db.select().from(users).where(eq(users.id, userid)))[0];
    const userpermissions = user?.userpermissions ?? [];
    const stringpermissions = permissions.map((perm) => perm.toString());
    const removedPermissions = userpermissions.filter(
      (perm) => !stringpermissions.includes(perm),
    );
    void db
      .update(users)
      .set({ userpermissions: [...removedPermissions] })
      .where(eq(users.id, userid));
  }
}

export async function calcuserpermissions(userid: string) {
  const user = (await db.select().from(users).where(eq(users.id, userid)))[0];
  const userpermissions = user?.userpermissions ?? [];
  const role = await db
    .select()
    .from(roles)
    .where(eq(roles.id, user?.roleid ?? 0));

  const rolepermissions = role[0]?.permissions ?? [];
  await db
    .update(users)
    .set({ permissions: [...rolepermissions, ...userpermissions] })
    .where(eq(users.id, userid));
}
