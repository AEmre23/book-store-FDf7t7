import Image from "next/image";

type BookShowroomType = {
  id: string;
};

export default async function BookShowroom(props: BookShowroomType) {
  const { id } = props;
  const Books = await getBooks(id);

  return (
    <div className="flex gap-3 items-center pt-5">
      {Books.product.slice(0, 4).map((item: any) => {
        if (!item.cover) {
          return null; // item.cover değeri tanımlı değilse, geçişi atla
        }

        return (
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
        );
      })}
    </div>
  );
}

type BookCoverImageType = {
  bookName: string;
};

async function BookCoverImage(props: BookCoverImageType) {
  const { bookName } = props;
  const image_url = await getBookCoverImage(bookName);

  return (
    <>
      {bookName ? (
        <Image
          src={image_url}
          fill={true}
          sizes="(max-width: 768px) 100px, (max-width: 1200px) 120px"
          alt="Book-cover"
        />
      ) : (
        <div className="w-32 h-44 bg-gray-300 rounded-lg animate-pulse" />
      )}
    </>
  );
}

async function getBookCoverImage(bookName: string) {
  try {
    const data = { fileName: bookName };
    const response = await fetch(
      "https://assign-api.piton.com.tr/api/rest/cover_image",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const result = await response.json();
    return result.action_product_image.url;
  } catch (error) {
    console.error(error);
  }
}

async function getBooks(id: string) {
  const BOOKS_URL = `https://assign-api.piton.com.tr/api/rest/products/${id}`;

  const res = await fetch(BOOKS_URL);
  return res.json();
}
