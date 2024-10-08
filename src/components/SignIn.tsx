"use client";
import React from "react";
import { BackgroundBeams } from "@/components/background-beams";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { signIn } from "next-auth/react";

export function SignIn() {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center rounded-md bg-neutral-950 antialiased">
      <div className="z-10 mx-auto max-w-2xl p-4">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
          </div>
          <div className="grid gap-4">
            <Button
              variant="default"
              className=""
              onClick={() => signIn("discord")}
            >
              Login with Discord
            </Button>
            <Button
              variant="default"
              className="w-full"
              onClick={() => signIn("google")}
            >
              Login with Google
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="#" className="underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}
