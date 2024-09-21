export enum Permission {
  Admin_star = "*",
  Admin_page = "admin.page",

  File_read = "file.read",
  File_write = "file.write",
  File_delete = "file.delete",

  Role_set = "role.set",
  Role_create = "role.create",
  Role_delete = "role.delete",

  UserPermoissions_set = "user.permissions.set",
}

export function hasUserPermission(
  permissions: string[] | null | undefined,
  permission: Permission,
): boolean {
  if (permissions?.includes("*")) return true;

  return permissions?.includes(permission) ?? false;
}
