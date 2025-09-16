import { redirect } from "next/navigation";

export async function getDataHome() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/objects/68c1ce772bc0a45649cdb682?pretty=true&read_key=${process.env.COSMIC_READ_KEY}&depth=1&props=slug,title,metadata`,
      { next: { revalidate: 86400 } }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
}

export async function getSubmenu() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/objects?pretty=true&query=%7B%22type%22%3A%22pages%22%7D&limit=10&skip=0&read_key=${process.env.COSMIC_READ_KEY}&depth=1&props=slug%2Ctitle&sort=-order`,
      { next: { revalidate: 86400 } }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch menu data");
    }

    return res.json();
  } catch (error) {
    throw new Error("Failed to fetch menu data");
  }
}

export async function getDataBySlug(slug: string) {
  const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}/objects`;

  const queryParams = new URLSearchParams({
    query: JSON.stringify({
      slug: slug,
    }),
    props: "slug,title,metadata",
    read_key: process.env.COSMIC_READ_KEY as string,
  });

  const url = `${baseUrl}?${queryParams.toString()}`;

  try {
    const res = await fetch(url, { next: { revalidate: 86400 } });

    if (!res.ok) {
      throw new Error("Failed to get data by slug");
    }

    return res.json();

  } catch (error) {
    console.error(error);
    redirect("/")
  }
}
