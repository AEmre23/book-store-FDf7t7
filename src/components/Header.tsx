"use client";
/** Dependencies */
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
/** Assets */
import Logo from "@/assets/svg/Logo.svg";
import Profile from "@/assets/svg/Profile.svg";
import Heart from "@/assets/svg/Heart.svg";
import Shop from "@/assets/svg/Shop.svg";
import Search from "@/assets/svg/Search.svg";

const Header = () => {
  const ICONS = [Profile, Heart, Shop];
  const pathname = usePathname();
  if (pathname === "/") return;
  return (
    <nav className="w-full px-12 py-5 shadow-sm flex justify-between sticky z-10 top-0 mb-5 bg-white">
      <Link href={"/categories"}>
        <Image
          className="cursor-pointer w-[60px] h-[40px]"
          src={Logo}
          width={60}
          height={40}
          alt="small-logo"
        />
      </Link>
      <div className="bg-bg-gray flex gap-3 px-5 py-1 min-w-[800px] rounded">
        <Image
          src={Search}
          alt="Search-icon"
          width={20}
          height={44}
          className="w-auto h-auto"
        />
        <input
          type="search"
          placeholder="Search"
          className="p-2 bg-transparent focus-visible:outline-none text-xl w-full"
        />
      </div>
      <div className="flex items-center gap-4">
        {ICONS.map((item, i) => (
          <Image className="cursor-pointer" key={i} src={item} alt={item} />
        ))}
      </div>
    </nav>
  );
};

export default Header;
