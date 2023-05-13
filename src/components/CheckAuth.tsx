"use client";
import { useAppSelector } from "@/redux/hooks";
import { redirect, usePathname } from "next/navigation";
import { useEffect } from "react";

export default function CheckAuth({ children }: { children: React.ReactNode }) {
  const isLoggedIn = useAppSelector((state) => state.userReducer.isLoggedIn);
  const pathname = usePathname();

  function extractToken(input: string): string {
    if (!input) return "";
    const prefix = "token=";
    const tokenIndex = input.indexOf(prefix);
    if (tokenIndex === -1) {
      throw new Error("Token not found in the input string.");
    }
    const startIndex = tokenIndex + prefix.length;
    const token = input.substring(startIndex);
    return token;
  }

  useEffect(() => {
    const cookies = document.cookie;
    const tokenCookie = extractToken(cookies);
    if (tokenCookie && pathname === "/") {
      console.log("redirecting to homepage");
      redirect("/categories");
    }
    if (!isLoggedIn && !tokenCookie && pathname !== "/") {
      console.log("redirecting to login/register page");
      redirect("/");
    }
  }, [isLoggedIn, pathname]);

  return <>{children}</>;
}
