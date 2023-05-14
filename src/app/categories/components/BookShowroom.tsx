/** Dependencies */
import Link from "next/link";
/** Functions */
import { getBooksById } from "@/utils/fetchFunctions";
/** Components */
import BookCoverImage from "@/components/BookCoverImage";

export default async function BookShowroom({ id }: { id: string }) {
  const Books = await getBooksById(id);

  return (
    <div className="flex gap-3 items-center pt-5">
      {Books.product.slice(0, 4).map((item) => (
        <Link key={item.id} href={`/product/${id}_${item.slug}`}>
          <div className="flex gap-5 p-2 bg-bg-gray rounded duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
            <div className="flex items-center justify-center w-32 h-44 relative">
              {/* @ts-expect-error Async Server Component */}
              <BookCoverImage bookName={item.cover} />
            </div>
            <div className="flex flex-col justify-between py-2">
              <div className="flex flex-col gap-2 font-semibold w-40">
                <span className="text-lg capitalize">{item.name}</span>
                <span className="text-gray-500">{item.author}</span>
              </div>
              <div className="font-bold text-xl text-purple-800">
                {item.price} $
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
