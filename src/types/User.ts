import type { Permission } from "./Permissions";
export type UserRole = {
  id: string;
  name: string;
  permissions: Permission[];
};

export type User = {
  id: string;
  email: string;
  image: string;
  roleid: string;
  permissions: Permission[];
  userpermissions: Permission[];
};
