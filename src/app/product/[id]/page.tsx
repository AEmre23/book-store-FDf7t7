/** Dependencies */
import React from "react";
/** Components */
import BookDetail from "../components/BookDetail";
import BookCoverImage from "@/components/BookCoverImage";
import NavBack from "../components/NavBack";
/** Functions */
import { getBooksById } from "@/utils/fetchFunctions";
import { BookType } from "@/types";

async function ProductPage({ params }: { params: { id: string } }) {
  const idAndSlug = params.id.split("_");
  const id = idAndSlug[0];
  const slug = idAndSlug[1];

  const allBooks = await getBooksById(id);
  if (!allBooks) return <div>No data...</div>;

  const book: BookType =
    allBooks.product.find((item) => item.slug === slug) || allBooks.product[0];

  return (
    <div className="w-full flex items-center justify-center">
      <div className="mx-16 my-1 max-w-7xl">
        <NavBack />
        <div className="flex gap-12">
          <div className="p-8 rounded bg-bg-gray flex items-center justify-center">
            <div className="relative w-[300px] h-[450px]">
              {/* @ts-expect-error Async Server Component */}
              <BookCoverImage bookName={book.cover} />
            </div>
          </div>
          <BookDetail book={book} />
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
