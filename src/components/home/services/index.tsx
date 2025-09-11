import Image from "next/image";

import type { HomeProps } from "@/interfaces/home.type";

import styles from "./styles.module.scss";

export function Services({ object }: HomeProps) {
  return (
    <section className={styles.containerAbout}>
      <article className={styles.innerAbout}>
        <h2 className={styles.title}>Sobre</h2>
        <p>{object.metadata.about.description}</p>
      </article>

      <div className={styles.bannerAbout}>
        <Image
          className={styles.imageAbout}
          alt="Imagem ilustrativa sobre a RPM Motors"
          src={object.metadata.about.banner.url}
          quality={100}
          fill
        />
      </div>
    </section>
  );
}
