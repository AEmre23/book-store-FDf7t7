"use client";
/** Dependencies */
import "./globals.css";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
/** Components */
import CheckAuth from "@/components/CheckAuth";
import Header from "@/components/Header";
/** Redux */
import { Providers } from "@/redux/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PITON Book Store",
  description: "Created by Emre Altunkaya",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        <Providers>
          <CheckAuth>
            {pathname !== "/" ? <Header /> : null}
            <>{children}</>
          </CheckAuth>
        </Providers>
      </body>
    </html>
  );
}
