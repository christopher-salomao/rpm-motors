import { getDataBySlug } from "@/utils/actions/get-data";
import { PostsProps } from "@/interfaces/posts.type";

import { Hero } from "@/components/hero";
import { Container } from "@/components/container";
import { Phone } from "lucide-react";
import Image from "next/image";

import styles from "./styles.module.scss";

interface ParamsProps {
  params: Promise<{ slug: string }>;
}

export default async function Post({ params }: ParamsProps) {
  const { objects }: PostsProps = await getDataBySlug((await params).slug);

  return (
    <main className={styles.main}>
      <Hero
        heading={objects[0].title}
        buttonURL={objects[0].metadata.button.url}
        buttonTitle={objects[0].metadata.button.title}
        bannerURL={objects[0].metadata.banner.url}
        icon={<Phone size={24} color="#ffffff" />}
      />
      <Container>
        <section className={styles.about}>
          <article className={styles.innerAbout}>
            <h1 className={styles.title}>{objects[0].title}</h1>
            <p>{objects[0].metadata.description.text}</p>

            {objects[0].metadata.description.button_active && (
              <a
                href={objects[0].metadata.description.button_url as string}
                target="_blank"
                rel="noreferrer noopener"
                className={styles.link}
              >
                {objects[0].metadata.description.button_title}
              </a>
            )}
          </article>
          <div className={styles.bannerAbout}>
            <Image
              priority
              className={styles.imageAbout}
              alt={objects[0].title}
              src={objects[0].metadata.description.banner.url}
              quality={100}
              fill
              sizes="(max-width: 700px) 100vw, (max-width: 1024px) 75vw, 50vw"
            />
          </div>
        </section>
      </Container>
    </main>
  );
}
