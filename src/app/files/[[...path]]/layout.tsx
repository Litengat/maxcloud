import { getServerSession } from "next-auth";
import { authOptions } from "@/server/auth";
import { SignIn } from "@/components/SignIn";
export default async function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const session = await getServerSession(authOptions);
  console.log("session", session);
  if (!session) {
    return <SignIn />;
  }
  return <>{children}</>;
}
