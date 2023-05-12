"use client";
import Image from "next/image";
import React from "react";
import Banner from "@/assets/img/Banner.png";
import BookShowroom from "./components/BookShowroom";
import Link from "next/link";

interface CategoriesProp {
  category: {
    id: number;
    name: string;
    created_at: string;
  }[];
}

async function Categories() {
  const categories = await getCategories();

  return (
    <div className="px-16 pb-16 flex flex-col items-center">
      <div className="mt-4 rounded overflow-hidden relative">
        <Image src={Banner} alt="banner" className="w-auto h-auto" />
        <div className="absolute text-6xl leading-[1.3] font-bold left-12 top-1/2 -translate-y-1/2">
          <div className="text-yellow-500">%25 discount</div>
          <div className="text-white">
            all Paulo Coelho <br /> books!
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-14 mt-12 w-full  max-w-[1350px]">
        {categories.category.map((item) => (
          <div key={item.id} className="">
            <div className=" flex items-center justify-between">
              <h3 className="font-bold text-3xl">{item.name}</h3>
              <Link href={`/categories/${item.id}`}>
                <span className="font-bold text-xl text-orange-400 hover:underline">
                  View All
                </span>
              </Link>
            </div>
            {/* @ts-expect-error Async Server Component */}
            <BookShowroom id={item.id} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;

async function getCategories(): Promise<CategoriesProp> {
  const CATEGORY_URL = "https://assign-api.piton.com.tr/api/rest/categories";
  const res = await fetch(CATEGORY_URL);
  return res.json();
}
