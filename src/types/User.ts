import type { Permissions } from "./Permissions";
export type UserRole = {
  id: string;
  name: string;
  permissions: Permissions[];
};

export type User = {
  id: string;
  email: string;
  image: string;
  roleid: string;
  permissions: Permissions[];
  userpermissions: Permissions[];
};
