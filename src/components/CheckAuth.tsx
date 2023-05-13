import { useAppSelector } from "@/redux/hooks";
import { redirect, usePathname } from "next/navigation";
import { useEffect } from "react";

export default function CheckAuth({ children }: { children: React.ReactNode }) {
  const isLoggedIn = useAppSelector((state) => state.userReducer.isLoggedIn);
  const pathname = usePathname();

  useEffect(() => {
    if (isLoggedIn && pathname === "/") {
      console.log("redirecting to homepage");
      redirect("/categories");
    }
    if (!isLoggedIn && pathname !== "/") {
      console.log("redirecting to login/register page");
      redirect("/");
    }
  }, [isLoggedIn, pathname]);

  return <>{children}</>;
}
