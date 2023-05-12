import Image from "next/image";
import { useEffect, useState } from "react";

type BookCoverImageType = {
  bookName: string;
};

export default function BookCoverImage(props: BookCoverImageType) {
  const { bookName } = props;
  const [image_url, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchImage = async () => {
      if (bookName) {
        const imageUrl = await getBookCoverImage(bookName);
        setImageUrl(imageUrl);
      }
    };

    fetchImage();
  }, [bookName]);

  return (
    <>
      {image_url && (
        <Image
          src={image_url}
          fill={true}
          sizes="(max-width: 768px) 100px, (max-width: 1200px) 300px"
          alt="Book-cover"
        />
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
