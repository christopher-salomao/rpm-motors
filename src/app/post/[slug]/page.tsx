import { getDataBySlug } from "@/utils/actions/get-data";
import styles from "./styles.module.scss";
import { PostsProps } from "@/interfaces/posts.type";

interface ParamsProps {
  params: Promise<{ slug: string }>;
}

export default async function Post({ params }: ParamsProps) {
  const { objects }: PostsProps = await getDataBySlug((await params).slug);

  return (
    <main>
      <h1>Teste</h1>
    </main>
  );
}
