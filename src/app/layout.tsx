"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { store } from "@/store/store";
import { Provider } from "react-redux";
import { usePathname } from "next/navigation";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
        <Provider store={store}>
          {pathname !== "/" ? <Header /> : null}
          {children}
        </Provider>
      </body>
    </html>
  );
}
