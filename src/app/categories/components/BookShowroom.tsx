import BookCoverImage from "@/components/BookCoverImage";

type BookShowroomType = {
  id: string;
};

export default async function BookShowroom(props: BookShowroomType) {
  const { id } = props;
  const Books = await getBooks(id);

  return (
    <div className="flex gap-3 items-center pt-5">
      {Books.product.slice(0, 4).map((item: any) => (
        <div
          key={item.id}
          className="flex gap-5 p-2 bg-bg-gray rounded duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
        >
          <div className="flex items-center justify-center w-32 h-44 relative">
            {/* @ts-expect-error Async Server Component */}
            <BookCoverImage bookName={item.cover} />
          </div>
          <div className="flex flex-col justify-between py-2">
            <div className="flex flex-col gap-2 font-semibold w-40">
              <span className="text-lg">{item.name}</span>
              <span className="text-gray-500">{item.author}</span>
            </div>
            <div className="font-bold text-xl text-purple-800">
              {item.price} $
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

async function getBooks(id: string) {
  const BOOKS_URL = `https://assign-api.piton.com.tr/api/rest/products/${id}`;

  const res = await fetch(BOOKS_URL);
  return res.json();
}
