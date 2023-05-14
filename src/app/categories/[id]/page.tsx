"use client";
/** Dependencies */
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
/** Assets */
import Arrow from "@/assets/svg/Arrow.svg";
/** Components */
import BookCoverImage from "@/components/BookCoverImage";
/** Functions */
import { getCategories, getBooksById } from "@/utils/fetchFunctions";

async function Category({ params }: { params: { id: string } }) {
  const router = useRouter();
  const category = await getBooksById(params.id);
  const categoryArray = await getCategories();

  const selectedCategory =
    categoryArray.category.find((item) => +item.id === +params.id) ||
    categoryArray.category[0];

  return (
    <div className="w-full flex items-center justify-center">
      <div className="mx-16 mb-6 max-w-7xl">
        <div
          onClick={() => router.back()}
          className="text-2xl font-bold flex items-center gap-2 cursor-pointer mb-8 w-fit group"
        >
          <Image
            className="duration-300 group-hover:-translate-x-1.5"
            src={Arrow}
            alt="arrow-icon"
          />
          {selectedCategory.name}
        </div>
        <div className="grid grid-cols-4 gap-8 items-center justify-center">
          {category.product.map((item) => {
            const data = { id: params.id, bookId: item.id };
            return (
              <Link
                key={item.id}
                href={{
                  pathname: `/product/${item.slug}`,
                  query: data,
                }}
              >
                <div className="flex flex-col gap-1 px-4 py-2 bg-bg-gray rounded w-[300px] shadow-sm duration-300 cursor-pointer hover:shadow-lg hover:-translate-y-2">
                  <div className="w-full flex items-center justify-center">
                    <div className="w-[200px] h-[300px] relative">
                      {/* @ts-expect-error Async Server Component */}
                      <BookCoverImage bookName={item.cover} />
                    </div>
                  </div>
                  <div className="font-bold text-xl text-left truncate max-w-[260px] capitalize">
                    {item.name}
                  </div>
                  <div className="flex items-center justify-between w-full font-semibold">
                    <span className="text-gray-400 text-sm">{item.author}</span>
                    <span className="text-purple-700 text-lg">
                      {item.price} $
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Category;
