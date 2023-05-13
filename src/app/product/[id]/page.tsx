"use client";
import BookCoverImage from "@/components/BookCoverImage";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import Arrow from "@/assets/svg/Arrow.svg";
import Image from "next/image";
import Heart from "@/assets/svg/Heart.svg";

interface Books {
  product: Book[];
}
type Book = {
  author: string;
  cover: string;
  created_at: string;
  description: string;
  id: number;
  name: string;
  price: number;
  sales: number;
  slug: string;
  likes_aggregate: {
    aggregate: {
      count: number;
    };
  };
};

async function ProductPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const id = searchParams.get("id") || "1";
  const bookId = searchParams.get("bookId") || "1";

  const categories = await getCategories(id);
  const book: Book =
    categories.product.find((item) => +item.id === +bookId) ||
    categories.product[0];
  if (!book) return <div>No data...</div>;

  return (
    <div className="w-full flex items-center justify-center">
      <div className="mx-16 my-1 max-w-7xl">
        <div
          onClick={() => router.push("/categories")}
          className="text-2xl font-bold flex items-center gap-2 cursor-pointer mb-8 w-fit group"
        >
          <Image
            className="duration-300 group-hover:-translate-x-1.5"
            src={Arrow}
            alt="arrow-icon"
          />
          Book Details
        </div>
        <div className="flex gap-12">
          <div className="p-8 rounded bg-bg-gray flex items-center justify-center">
            <div className="relative w-[300px] h-[450px]">
              <BookCoverImage bookName={book.cover} />
            </div>
          </div>
          <div className="flex flex-col gap-12">
            <div>
              <div className="flex w-full items-center justify-between">
                <h1 className="capitalize font-bold text-4xl">{book.name}</h1>
                <Image src={Heart} alt="heart-icon" />
              </div>
              <div className="text-gray-400 font-semibold text-3xl mt-2">
                {book.author}
              </div>
            </div>
            <div className="">
              <h3 className="font-bold text-2xl pb-2">Summary</h3>
              <div className="text-gray-400 font-medium leading-normal text-xl">
                {book.description}
              </div>
            </div>
            <div className="w-full flex mt-auto items-center justify-end">
              <button className="py-3 px-5 w-96 flex items-center justify-between rounded-md bg-orange-500 text-white font-medium text-xl duration-300 hover:shadow active:scale-95">
                <span>{book.price} $</span>
                <span>Buy Now</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;

async function getCategories(id: string): Promise<Books> {
  const CATEGORY_URL = `https://assign-api.piton.com.tr/api/rest/products/${id}`;
  const res = await fetch(CATEGORY_URL);
  return res.json();
}
