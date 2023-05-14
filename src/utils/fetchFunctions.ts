import {
  BookArrayType,
  CategoriesArrayType,
  GetCoverImageAction,
} from "@/types";

export async function getBooksById(id: string): Promise<BookArrayType> {
  const BOOKS_URL = `https://assign-api.piton.com.tr/api/rest/products/${id}`;
  const res = await fetch(BOOKS_URL);
  return res.json();
}

export async function getCategories(): Promise<CategoriesArrayType> {
  const CATEGORY_URL = "https://assign-api.piton.com.tr/api/rest/categories";
  const res = await fetch(CATEGORY_URL);
  return res.json();
}

export async function getBookCoverImage(
  bookName: string
): Promise<GetCoverImageAction> {
  const data = { fileName: bookName };
  const res = await fetch(
    "https://assign-api.piton.com.tr/api/rest/cover_image",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  return res.json();
}
