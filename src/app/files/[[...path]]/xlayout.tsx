import { useSession } from "next-auth/react";

export function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const session = useSession();
  if (session) return <>{children}</>;
}
