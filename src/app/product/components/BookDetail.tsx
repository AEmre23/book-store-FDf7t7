import Image from "next/image";
import Heart from "@/assets/svg/Heart.svg";
import { BookType } from "@/types";

export default function BookDetail({ book }: { book: BookType }) {
  return (
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
  );
}
