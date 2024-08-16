import { getServerSession } from "next-auth";
import { authOptions } from "@/server/auth";
import { SignIn } from "@/components/SignIn";
import { db } from "@/server/db";
import { roles } from "@/server/db/schema";
import { eq } from "drizzle-orm";
export default async function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const session = await getServerSession(authOptions);
  console.log("session", session);
  if (!session) {
    return <SignIn />;
  }
  const role = await db
    .select()
    .from(roles)
    .where(eq(roles.id, session.user.roleid ?? 0));
  console.log("role", role);

  return <>{children}</>;
}
