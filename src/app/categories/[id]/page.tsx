"use client";
import React from "react";
import Arrow from "@/assets/svg/Arrow.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import BookCoverImage from "@/components/BookCoverImage";

interface CategoryProp {
  params: {
    id: string;
  };
}

async function Category(props: CategoryProp) {
  const { params } = props;
  const router = useRouter();
  const category = await getCategory(params.id);
  const categoryArray = await getCategories();

  const selectedCategory = categoryArray.category.find(
    (item) => +item.id === +params.id
  );

  return (
    <div className="w-full flex items-center justify-center">
      <div className="mx-16 my-16 max-w-7xl">
        <div
          onClick={() => router.push("/categories")}
          className="text-2xl font-bold flex items-center gap-1 cursor-pointer pb-8 w-fit"
        >
          <Image src={Arrow} alt="arrow-icon" />
          {selectedCategory.name}
        </div>
        <div className="grid grid-cols-4 gap-8 items-center justify-center">
          {category.product.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-1 px-4 py-2 bg-bg-gray rounded w-[300px] shadow-sm duration-300 cursor-pointer hover:shadow hover:-translate-y-1"
            >
              <div className="w-full flex items-center justify-center">
                <div className="w-[200px] h-[300px] relative">
                  <BookCoverImage bookName={item.cover} />
                </div>
              </div>
              <div className="font-bold text-xl text-left truncate max-w-[260px]">
                {item.name}
              </div>
              <div className="flex items-center justify-between w-full font-semibold">
                <span className="text-gray-400 text-sm">{item.author}</span>
                <span className="text-purple-700 text-lg">{item.price} $</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Category;

async function getCategory(id: string) {
  const CATEGORY_URL = `https://assign-api.piton.com.tr/api/rest/products/${id}`;
  const res = await fetch(CATEGORY_URL);
  return await res.json();
}
//
async function getCategories() {
  const CATEGORY_URL = `https://assign-api.piton.com.tr/api/rest/categories`;
  const res = await fetch(CATEGORY_URL);
  return await res.json();
}
