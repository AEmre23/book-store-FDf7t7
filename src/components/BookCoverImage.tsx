/** Dependencies */
import Image from "next/image";
/** Functions */
import { getBookCoverImage } from "@/utils/fetchFunctions";

export default async function BookCoverImage({
  bookName,
}: {
  bookName: string;
}) {
  const image_obj = await getBookCoverImage(bookName);
  const image_url = image_obj.action_product_image.url;
  return (
    <Image
      src={image_url}
      fill={true}
      sizes="(max-width: 768px) 100px, (max-width: 1200px) 300px"
      alt="Book-cover"
    />
  );
}
