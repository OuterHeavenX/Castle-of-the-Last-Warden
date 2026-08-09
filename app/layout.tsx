import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Castle of the Last Warden",
  description: "Rebuild the forsaken keep. Master forgotten disciplines. Ring the bell when you are ready.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
