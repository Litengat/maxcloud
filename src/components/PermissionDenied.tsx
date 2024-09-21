"use client";
import type { Permission } from "@/types/Permissions";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { signOut, useSession } from "next-auth/react";
import { SignIn } from "./SignIn";
export default function PermissionDenied({
  permission,
}: {
  permission: Permission;
}) {
  const session = useSession();
  return (
    <>
      <Dialog open={session.status == "authenticated"}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Permission Denied</DialogTitle>
            <DialogDescription>
              You need the permission: <b>{permission.toString()}</b>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => {
                void signOut();
              }}
            >
              Sign out
            </Button>
            <Button
              type="submit"
              onClick={() => {
                window.history.back();
              }}
            >
              Back
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <SignIn />
    </>
  );
}
