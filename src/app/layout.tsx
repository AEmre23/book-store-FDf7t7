/** Dependencies */
import "./globals.css";
import { Inter } from "next/font/google";
/** Components */
import CheckAuth from "@/components/CheckAuth";
import Header from "@/components/Header";
/** Redux */
import { Providers } from "@/redux/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Book Store | Emre",
  description: "Created by Emre Altunkaya",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        <Providers>
          <CheckAuth>
            {/* @ts-expect-error Async Server Component */}
            <Header />
            <>{children}</>
          </CheckAuth>
        </Providers>
      </body>
    </html>
  );
}
