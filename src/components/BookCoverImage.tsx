"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

type BookCoverImageProps = {
  bookName: string;
};

export default function BookCoverImage(props: BookCoverImageProps) {
  const { bookName } = props;
  const [image_url, setImageUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchImage = async () => {
      if (bookName) {
        const imageUrl = await getBookCoverImage(bookName);
        setImageUrl(imageUrl);
        setLoading(false);
      }
    };
    fetchImage();
  }, [bookName]);

  return (
    <>
      {!loading ? (
        <Image
          src={image_url}
          fill={true}
          sizes="(max-width: 768px) 100px, (max-width: 1200px) 300px"
          alt="Book-cover"
        />
      ) : (
        <div className="w-full h-full bg-slate-200 animate-pulse rounded flex items-center justify-center" />
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
