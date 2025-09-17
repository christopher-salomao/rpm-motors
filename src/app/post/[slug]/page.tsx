import { Suspense } from "react";
import { Metadata } from "next";
import { getDataBySlug } from "@/utils/actions/get-data";
import { PostsProps } from "@/interfaces/posts.type";

import { Content } from "./components/content";
import { LoadingPost } from "./components/loading";

interface ParamsProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: ParamsProps): Promise<Metadata> {
  const { objects }: PostsProps = await getDataBySlug(
    (
      await params
    ).slug
  ).catch(() => {
    return {
      title: "RPM Motors - Sua oficina de confiança",
      description: "A melhor oficina de carros de Belo Horizonte e região.",
    };
  });

  try {
    return {
      title: `RPM Motors - ${objects[0].title}`,
      description: objects[0].metadata.description.text,
      robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
          index: true,
          follow: true,
          noimageindex: true,
        },
      },
      openGraph: {
        title: `RPM Motors - ${objects[0].title}`,
        description: objects[0].metadata.description.text,
        siteName: "RPM Motors",
        locale: "pt-BR",
        type: "website",
        images: [objects[0].metadata.description.banner.url],
        url: process.env.NEXT_PUBLIC_URL,
      },
      icons: {
        icon: `${process.env.NEXT_PUBLIC_URL}/favicon.ico`,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      title: "RPM Motors - Sua oficina de confiança",
      description: "A melhor oficina de carros de Belo Horizonte e região.",
    };
  }
}

export default async function Post({ params }: ParamsProps) {
  return (
    <Suspense fallback={<LoadingPost />}>
      <Content slug={(await params).slug} />
    </Suspense>
  );
}
