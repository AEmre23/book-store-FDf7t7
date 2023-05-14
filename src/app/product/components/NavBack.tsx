"use client";
import Image from "next/image";
import Arrow from "@/assets/svg/Arrow.svg";
import { useRouter } from "next/navigation";

export default function NavBack() {
  const router = useRouter();
  return (
    <div
      onClick={() => router.back()}
      className="text-2xl font-bold flex items-center gap-2 cursor-pointer mb-8 w-fit group"
    >
      <Image
        className="duration-300 group-hover:-translate-x-1.5"
        src={Arrow}
        alt="arrow-icon"
      />
      Book Details
    </div>
  );
}
